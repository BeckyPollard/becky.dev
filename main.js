document.getElementById('disableAnim').onclick = function() {
  const body = document.getElementById('about');
  body.classList.toggle('disableAnimation');
  console.log(this.innerText);
  if (this.innerText === 'Disable Animations') {
    this.innerText = 'Enable Animations';
  } else {
    this.innerText = 'Disable Animations'
  }
}
