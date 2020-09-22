const icons = document.querySelectorAll('.icon')
console.log(icons)
icons.forEach(icon => {
  icon.addEventListener('click', (e) => {
    icon.classList.toggle('open')
  })
});