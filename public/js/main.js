//Side nav toggle funcationality
const menu = document.querySelector('.menu')
const mobileSideNav = document.querySelector('.mobile-side-nav')
const closeNav = document.querySelector('.close-side-nav')

menu.addEventListener('click', () => mobileSideNav.classList.toggle('-translate-x-full'))
closeNav.addEventListener('click', () => mobileSideNav.classList.toggle('-translate-x-full'))

//Side nav toggle funcationality ends