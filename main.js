const hamburger = document.querySelector('.hamburger')
const hamburgerIcon = document.querySelector('.hamburger i')
const dropdownMenu = document.querySelector('.dropdown')
const navbar = document.getElementById("navbar");
const sticky = navbar.getBoundingClientRect().top + window.scrollY;


// hamburgeris funqcia
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

// show hidden password
const showPass = (loginPass, loginEye) =>{
    const input = document.getElementById(loginPass),
          iconEye = document.getElementById(loginEye)

    iconEye.addEventListener('click', () =>{
        if(input.type === 'password'){
            input.type = 'text'

            iconEye.classList.add('ri-eye-line')
            iconEye.classList.remove('ri-eye-off-line')
        } else{
            input.type = 'password'

            iconEye.classList.remove('ri-eye-line')
            iconEye.classList.add('ri-eye-off-line')
        }
    })
}
showPass('pass', 'eye')