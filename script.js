const toggle = document.querySelector('.toggle-nav')
const closeBtn = document.querySelector('.sidebar-close-btn')
const overlay = document.querySelector('.sidebar-overlay')

// reveal/hide the overlay
toggle.addEventListener('click', () => {
  overlay.classList.add('show')
})
closeBtn.addEventListener('click', () => {
  overlay.classList.remove('show')
})