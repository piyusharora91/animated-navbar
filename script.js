const body = document.getElementById('body');
const menuBars = document.querySelector('#menu-bars');
const overlay = document.querySelector('#overlay');
const navLinksContainer = document.querySelectorAll('.nav-links-container');
const navLinks = document.querySelectorAll('.nav-links');

let openNav = false;

const toggleNav = () => {
    // HamBurger Menu change
    menuBars.classList.toggle('change');
    if (!openNav) {
        openNav = true;
        body.style.overflow = 'hidden';
        (overlay.classList.contains('overlay-slide-left')) ? overlay.classList.replace('overlay-slide-left', 'overlay-slide-right') :
            overlay.classList.add('overlay-slide-right');
        navLinksContainer.forEach((linkContainer, index) =>
            linkContainer.classList.replace(`slide-out-${index + 1}`, `slide-in-${index + 1}`)
        );
    }
    else {
        openNav = false;
        body.style.overflow = 'initial';
        overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
        navLinksContainer.forEach((linkContainer, index) =>
            linkContainer.classList.replace(`slide-in-${index + 1}`, `slide-out-${index + 1}`)
        );
    }
}

window.addEventListener('DOMContentLoaded', () => {
    // Event Listeners
    menuBars.addEventListener('click', toggleNav);
    navLinks.forEach(link => link.addEventListener('click', toggleNav));
});

