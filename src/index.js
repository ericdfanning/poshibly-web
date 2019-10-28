const navSlide = () => {
	const burger = document.querySelector('.burger');
	const navLinks = document.querySelector('.mobile-nav__links');
	// const nav = document.querySelector('nav');

console.log('burger is dude', navLinks)
	burger.addEventListener('click', () => {
		navLinks.classList.toggle('nav-links-active');
		// nav.classList.toggle('nav-active');
		burger.classList.toggle('toggle');
	})
}

navSlide();
