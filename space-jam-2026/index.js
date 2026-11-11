const logoContainer = document.getElementsByClassName('space-jam-logo')[0]
const revealInput = document.getElementById('reveal-input')
const replayButton = document.getElementById('replay-btn')
const spaceInput = document.getElementById('space-input')
const spaceContainer = logoContainer.querySelector('.space')
const logoLabel = logoContainer.querySelector('.visually-hidden')

function renderSpaceText() {
  const letters = Array.from(spaceInput.value, (character, index) => {
    const letter = document.createElement('span')
    letter.className = 'letter'
    letter.textContent = character
    letter.dataset.text = character
    letter.style.setProperty('--letter-index', index)
    return letter
  })

  spaceContainer.replaceChildren(...letters)
  logoContainer.style.setProperty('--space-letter-count', letters.length)
  logoLabel.textContent = `${spaceInput.value} Jam`.trim()
}

renderSpaceText()

spaceInput.addEventListener('input', () => {
  renderSpaceText()

  if (!logoContainer.classList.contains('can-animate')) {
    return
  }

  // Show edits immediately; Replay can restart the logo animations.
  logoContainer.getAnimations({ subtree: true }).forEach(animation => {
    if (animation instanceof CSSAnimation) animation.finish()
  })
})

revealInput.addEventListener('click', () => {
  const isRevealOn = logoContainer.classList.contains('reveal')

  logoContainer.classList.toggle('reveal', !isRevealOn)
  revealInput.checked = !isRevealOn
});

replayButton.addEventListener('click', () => {
  if (!logoContainer.classList.contains('can-animate')) {
    return
  }

  // Reset reveal state
  logoContainer.classList.remove('can-animate', 'reveal')
  revealInput.checked = false
  void logoContainer.offsetWidth

  logoContainer.classList.add('can-animate')
});

document.fonts.ready.then(() => {
  console.log('All active fonts have loaded.')
  logoContainer.classList.add('can-animate')
});
