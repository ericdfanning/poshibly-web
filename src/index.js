const navSlide = () => {
	const burger = document.querySelector('.burger');
	const navLinks = document.querySelector('.nav-links');
	const nav = document.querySelector('nav');

console.log('burger is', burger)
	burger.addEventListener('click', () => {
		navLinks.classList.toggle('nav-links-active');
		nav.classList.toggle('nav-active');
	})
}

navSlide();
