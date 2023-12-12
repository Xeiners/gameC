const connexionConteneur= document.querySelector('.connexion');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const menuLogin = document.querySelector('.containerLogin')
const close = document.querySelector('.btnClose');
const openNav1 = document.querySelector('.loginNav');
const openNav2 = document.querySelector('.registerNav');


registerLink.addEventListener('click', openRegsiter);
loginLink.addEventListener('click', openLogin);
close.addEventListener('click', closeIt);

function openRegsiter () {
    connexionConteneur.classList.add('active');
}

function openLogin () {
    connexionConteneur.classList.remove('active');
}

function closeIt () {
    menuLogin.classList.add('close');
    menuLogin.style.display = "none";
}

openNav1.addEventListener('click', () => {
    menuLogin.classList.remove('close');
    menuLogin.style.display = "flex";
    openLogin();
})

openNav2.addEventListener('click', () => {
    menuLogin.classList.remove('close');
    menuLogin.style.display = "flex";
    openRegsiter();
})


