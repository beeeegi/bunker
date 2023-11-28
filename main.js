const hamburger = document.querySelector('.hamburger')
const hamburgerIcon = document.querySelector('.hamburger i')
const dropdownMenu = document.querySelector('.dropdown')

hamburgerIcon.onclick = function() {
    dropdownMenu.classList.toggle('open');

    const isOpen = dropdownMenu.classList.contains('open');

    if (isOpen) {
        hamburgerIcon.classList.remove('fa-bars');
        hamburgerIcon.classList.add('fa-xmark');
    } else {
        hamburgerIcon.classList.remove('fa-xmark');
        hamburgerIcon.classList.add('fa-bars');
    }
};

