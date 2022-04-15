//current page link highliting
const splitedPath = window.location.pathname.split('/')
const pageName = splitedPath[splitedPath.length - 1]
const navLinks = document.querySelectorAll('.nav-links')

navLinks.forEach(element => {
    const linkParts = element.href.split('/')
    const currentPage = linkParts[linkParts.length - 1]
    console.log(currentPage)
    if (pageName === currentPage) {
        element.classList.add('underline', 'decoration-brand-600', 'decoration-4', 'underline-offset-8')
    }
});
//end of current page link highliting

import { multiStepFormHandling } from './registration.js'
multiStepFormHandling()


//Side nav toggle funcationality
const menu = document.querySelector('.menu')
const mobileSideNav = document.querySelector('.mobile-side-nav')
const closeNav = document.querySelector('.close-side-nav')

menu.addEventListener('click', () => mobileSideNav.classList.toggle('-translate-x-full'))
closeNav.addEventListener('click', () => mobileSideNav.classList.toggle('-translate-x-full'))

//Side nav toggle funcationality ends