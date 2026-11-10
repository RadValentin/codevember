const logoContainer = document.getElementsByClassName('space-jam-logo')[0]
const revealInput = document.getElementById('reveal-input')

revealInput.addEventListener('click', () => {
  const isRevealOn = logoContainer.classList.contains('reveal')

  logoContainer.classList.toggle('reveal', !isRevealOn)
  revealInput.checked = !isRevealOn
});