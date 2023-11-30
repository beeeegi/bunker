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