const navSlide = () => {
	const burger = document.querySelector('.burger');
	const navLinks = document.querySelector('.mobile-nav__links');
	const bodyExcludingMenu = document.querySelector('.main-content')
	// const nav = document.querySelector('nav');

console.log('burger is dude', navLinks)
	burger.addEventListener('click', () => {
		navLinks.classList.toggle('nav-links-active');
		burger.classList.toggle('toggle');
	});

	bodyExcludingMenu.addEventListener('click', () => {
		navLinks.classList.toggle('nav-links-active');
		burger.classList.toggle('toggle');
	});
}

navSlide();
