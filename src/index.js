const Mustache = require('mustache');
const pricingOverlayTemplate = require('./templates/pricingOverlay.html');
const termsOfServiceOverlayTemplate = require('./templates/termsOfServiceOverlay.html');
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.mobile-nav__links');
const bodyExcludingMenu = document.querySelector('.main-content');
const menuItemsMobile = document.querySelectorAll('ul.mobile-nav__links li');
const moreBelowCaret = document.querySelector('.more-below-caret__elm');
const whatIsItSection = document.querySelector('.what-is-it');
const priceElement = document.querySelector('.price__value');
const pricingContainer = document.querySelector('#pricing');
const pricingNavLinks = document.querySelectorAll('#Pricing_Nav');
const privacyPolicy = document.querySelector('.privacy-policy');
const termsOfService = document.querySelector('.terms-of-service');
const featureNavLinks = document.querySelectorAll('#Features');
const featuresContainer = document.querySelector('#features');
const contactNavLinks = document.querySelectorAll('#Contact');
const contactContainer = document.querySelector('#contact');


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

const initEventListeners = () => {
	navSlide();
	initNavLinkListeners();
}

const initNavLinkListeners = () => {
	for (let i = 0; i < featureNavLinks.length; i++) {
		featureNavLinks[i].addEventListener('click', () => {
			featuresContainer.scrollIntoView({ behavior: "smooth" });
		})
	}

	for (let i = 0; i < pricingNavLinks.length; i++) {
		pricingNavLinks[i].addEventListener('click', (e) => {
			pricingContainer.scrollIntoView({ behavior: "smooth" });
		});
	}

	for (let i = 0; i < contactNavLinks.length; i++) {
		contactNavLinks[i].addEventListener('click', (e) => {
			contactContainer.scrollIntoView({ behavior: "smooth" });
		});
	}
}

initEventListeners();

const closeOverlayListener = () => {
	const closeOverlay = document.querySelector('#close-overlay');
	if (closeOverlay) {
		closeOverlay.addEventListener('click', () => {
			document.querySelector('.privacy-overlay').setAttribute('style', 'z-index: -100; visibility: hidden;');
			document.querySelector('.main-body').setAttribute('style', 'opacity: 1;')
		})
	}
}
const closeOverlayListenerTerms = () => {
	const closeOverlayTerms = document.querySelector('#close-overlay--terms');
	if (closeOverlayTerms) {
		closeOverlayTerms.addEventListener('click', () => {
			document.querySelector('.terms-of-service-overlay').setAttribute('style', 'z-index: -100; visibility: hidden;');
			document.querySelector('.main-body').setAttribute('style', 'opacity: 1;')
		})
	}
}


// function isElementInViewport (el) {

//     // Special bonus for those using jQuery
//     // if (typeof jQuery === "function" && el instanceof jQuery) {
//     //     el = el[0];
//     // }

//     var rect = el.getBoundingClientRect();
//     // console.log('what is rect', rect, 'window', window.innerHeight, 'window width', window.innerWidth)

//     return (
//         rect.top >= 0 &&
//         // rect.left >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)  or $(window).height() 
//         // rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
//     );
// }

// function onVisibilityChange(el, callback) {
//     var old_visible = false;
//     return function () {
//         var visible = isElementInViewport(el);
//         if (visible != old_visible) {
//         	console.log('its visible', visible)
//             old_visible = visible;
//             if (typeof callback == 'function') {
//                 callback();
//             }
//         }
//     }
// }

// let handler = onVisibilityChange(priceElement, () => {
// 	priceElement.classList.add('animate-price')
// });

//  // Non-jQuery
// if (window.addEventListener) {
//     // addEventListener('DOMContentLoaded', handler, false);
//     // addEventListener('load', handler, false);
//     addEventListener('scroll', handler, false);
//     addEventListener('resize', handler, false);
// } else if (window.attachEvent)  {
//     // attachEvent('onDOMContentLoaded', handler); // Internet Explorer 9+ :(
//     // attachEvent('onload', handler);
//     attachEvent('onscroll', handler);
//     attachEvent('onresize', handler);
// }

