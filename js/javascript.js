const navigationButtonBurger = document.querySelector('.navigation__button-burger');
const burgerMenu = document.querySelector('.navigation');

function toogleBurgerMenu() {
    burgerMenu.classList.toggle('navigation_opened');
    navigationButtonBurger.classList.toggle('navigation__button-burger_opened');
}

navigationButtonBurger.addEventListener('click', toogleBurgerMenu);
