const hamburger = document.querySelector('.hamburger');
const hamburgerIcon = document.querySelector('.hamburger i');
const dropdownMenu = document.querySelector('.dropdown');

// hamburgeris funqcia
hamburgerIcon.onclick = function() {
    dropdownMenu.classList.toggle('open');

    const isOpen = dropdownMenu.classList.contains('open');

    hamburgerIcon.classList.toggle('fa-bars', !isOpen);
    hamburgerIcon.classList.toggle('fa-xmark', isOpen);
};