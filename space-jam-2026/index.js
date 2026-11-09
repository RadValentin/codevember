logoContainer = document.getElementsByClassName('space-jam-logo')[0]
revealButton = document.getElementById('reveal-btn')

revealButton.addEventListener('click', () => {
  logoContainer.classList.toggle('reveal')
});