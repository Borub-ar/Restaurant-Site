'use strict';
const navBar = document.querySelector('.menu');
const navBarLogo = document.querySelector('.menu__logo');
const header = document.querySelector('#header')


const shrinkNav = function(entries) {
    const [entry] = entries;

    if (entry.isIntersecting) navBarLogo.style.maxHeight = '4.6rem';
    else navBarLogo.style.maxHeight = '2.5rem';
}

const navObserver = new IntersectionObserver(shrinkNav, {
    root: null,
    threshold: 0.9
})

navObserver.observe(header)