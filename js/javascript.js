const navigationButtonBurger = document.querySelector('.navigation__button-burger');
const burgerMenu = document.querySelector('.navigation');
const burgerContacts = document.querySelector('.initial__content-contact-lower');
const linkMenu = document.querySelectorAll('.menu__link');
const interdictionScroll = document.querySelector('.page');

linkMenu.forEach(link => {
	link.addEventListener('click', (e) => {
		handleLinkClick(e);
		
	})
})

function closeNavigation() {
	interdictionScroll.classList.remove('interdiction-scroll');
	burgerContacts.classList.remove('initial__content-contact-lower_opened');
    burgerMenu.classList.remove('navigation_opened');
    navigationButtonBurger.classList.remove('navigation__button-burger_opened');
}



function toggleBurgerMenu() {
	interdictionScroll.classList.toggle('interdiction-scroll');
    burgerContacts.classList.toggle('initial__content-contact-lower_opened');
    burgerMenu.classList.toggle('navigation_opened');
    navigationButtonBurger.classList.toggle('navigation__button-burger_opened');
	
}

function handleLinkClick(e) {
	e.preventDefault();
	const elementLink = e.target;
	const sectionSelector = elementLink.dataset.goto;
	const sectionToScroll = document.querySelector(sectionSelector);
	sectionToScroll.scrollIntoView({behavior: 'smooth', block: 'start'});
	closeNavigation();
}

navigationButtonBurger.addEventListener('click', toggleBurgerMenu);



