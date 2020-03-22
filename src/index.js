const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.mobile-nav__links');
const bodyExcludingMenu = document.querySelector('.main-content');
const menuItemsMobile = document.querySelectorAll('ul.mobile-nav__links li');

const navSlide = () => {

	burger.addEventListener('click', () => {
		navLinks.classList.toggle('nav-links-active');
		burger.classList.toggle('toggle');
	});

	bodyExcludingMenu.addEventListener('click', () => {
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

navSlide();
