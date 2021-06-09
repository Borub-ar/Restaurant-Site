'use strict';

window.addEventListener('scroll', () => {
    const navBar = document.querySelector('.menu');
    const navBarLogo = document.querySelector('.menu__logo');

    if (window.pageYOffset > navBar.getBoundingClientRect().height) {
        navBarLogo.style.maxHeight = '2.5rem';
    }

    if (window.pageYOffset < navBar.getBoundingClientRect().height) {
        navBarLogo.style.maxHeight = '4.6rem';
    }
})

