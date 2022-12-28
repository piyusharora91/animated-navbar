const body = document.getElementsByTagName('body');
const menuBars = document.querySelector('#menu-bars');
const overlay = document.querySelector('#overlay');
const navLinks = document.querySelectorAll('.nav-links');

let openNav = false;

const toggleNav = () => {
    // HamBurger Menu change
    menuBars.classList.toggle('change');
    if (!openNav) {
        openNav = true;
        overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
        navLinks.forEach((link, index) =>
            link.classList.replace(`slide-out-${index + 1}`, `slide-in-${index + 1}`)
        );
    }
    else {
        openNav = false;
        overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
        navLinks.forEach((link, index) =>
            link.classList.replace(`slide-in-${index + 1}`, `slide-out-${index + 1}`)
        );
    }
}

// Event Listeners
menuBars.addEventListener('click', toggleNav);
navLinks.forEach(link => link.addEventListener('click', toggleNav));

