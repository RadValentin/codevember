const logoContainer = document.getElementsByClassName('space-jam-logo')[0]
const revealInput = document.getElementById('reveal-input')
const replayButton = document.getElementById('replay-btn')

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
