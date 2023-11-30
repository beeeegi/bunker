const hamburger = document.querySelector('.hamburger');
const hamburgerIcon = document.querySelector('.hamburger i');
const dropdownMenu = document.querySelector('.dropdown');
const navbar = document.getElementById("navbar");
const sticky = navbar.getBoundingClientRect().top + window.scrollY;

// hamburgeris funqcia
hamburgerIcon.onclick = function() {
    dropdownMenu.classList.toggle('open');

    const isOpen = dropdownMenu.classList.contains('open');

    hamburgerIcon.classList.toggle('fa-bars', !isOpen);
    hamburgerIcon.classList.toggle('fa-xmark', isOpen);
};

// show hidden password
const showPass = (loginPass, loginEye) => {
    const input = document.getElementById(loginPass);
    const iconEye = document.getElementById(loginEye);

    iconEye.addEventListener('click', () => {
        input.type = (input.type === 'password') ? 'text' : 'password';

        iconEye.classList.toggle('ri-eye-line', input.type === 'text');
        iconEye.classList.toggle('ri-eye-off-line', input.type === 'password');
    });
};

showPass('pass', 'eye');
