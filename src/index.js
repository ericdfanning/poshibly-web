const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.mobile-nav__links');
const bodyExcludingMenu = document.querySelector('.main-content');
const menuItemsMobile = document.querySelectorAll('ul.mobile-nav__links li');
const featureNavLink = document.querySelector('#Features');
const moreBelowCaret = document.querySelector('.more-below-caret__elm');
const whatIsItSection = document.querySelector('.what-is-it');
const featuresSection = document.querySelector('.features');


const navSlide = () => {

	burger.addEventListener('click', () => {
		navLinks.classList.toggle('nav-links-active');
		burger.classList.toggle('toggle');
	});

	bodyExcludingMenu.addEventListener('click', () => {
		console.log('is the close anywhere firing???')
		closeMenu();
	});

	for (let i = 0; i < menuItemsMobile.length; i++) {
		menuItemsMobile[i].addEventListener('click', (e) => {
			closeMenu();
		});
	}
}

const closeMenu = () => {
	navLinks.classList.toggle('nav-links-active', false);
	burger.classList.toggle('toggle', false);
}

const initEventListeners = () => {
	moreBelowCaret.addEventListener('click', () => {
		whatIsItSection.scrollIntoView();
	})

	featureNavLink.addEventListener('click', () => {
		console.log('is it firing?')
		featuresSection.scrollIntoView();
	})
}

navSlide();
initEventListeners();
