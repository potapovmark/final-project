const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.menu');
const close = document.querySelector('.menu__close');

burger.addEventListener('click', () => {
    menu.classList.add('menu--visible');
});
close.addEventListener('click', () => {
    menu.classList.remove('menu--visible');
});