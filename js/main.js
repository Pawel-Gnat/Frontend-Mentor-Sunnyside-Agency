const menuBtn = document.querySelector('.nav-mobile__btn')
const hamburger = document.querySelector('.menu')
const showLinks = document.querySelector('.nav-mobile--links')
const activeLinks = document.querySelector('.active')

menuBtn.addEventListener('click', () => {
	menuBtn.classList.toggle('menu')
	showLinks.classList.toggle('active')
})
