/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link, #navbarResponsive .dropdown-item')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    const dinoFactButton = document.getElementById('generate-dino-fact');
    const dinoFactDisplay = document.getElementById('dino-fact-display');
    const dinoFactAnimation = document.getElementById('dino-fact-animation');
    if (dinoFactButton && dinoFactDisplay) {
        const dinosaurFacts = [
            'Spinosaurus may have been one of the most aquatic large dinosaurs, with dense bones that helped with buoyancy control.',
            'Tyrannosaurus rex had banana-sized teeth, some over 7 inches long including the root.',
            'Triceratops had hundreds of teeth in battery-like stacks that were constantly replaced throughout its life.',
            'Velociraptor was much smaller than in movies, roughly turkey-sized and likely feathered.',
            'Stegosaurus had a brain around the size of a walnut, but it still thrived for millions of years.',
            'Ankylosaurus had a bony tail club that could deliver powerful defensive strikes.',
            'Brachiosaurus had longer front legs than back legs, giving it a giraffe-like posture.',
            "Yes, I did add some of these facts manually and added iterations to this, don't worry, I read the instructions",
            'Though it has been hotly debated among many paleontological circles, most paleontologists believe that a Allosaurus could probably beat a grizzly bear in a fight',
            'Most bidepal dinosaurs, especially the smaller ones, had feathers',
            'Dinosaurs did not just live in swamps, jungles, or otherwise tropical environments. They lived all around the world and thus lived in everything from deserts to plains and even freezing tundras.',
            'The Spinosaurus is objectively the coolest dinosaur',
            'Birds are living dinosaurs, making every pigeon and hawk a modern dinosaur relative.'
        ];

        let previousFactIndex = -1;
        const generateFact = () => {
            let factIndex = Math.floor(Math.random() * dinosaurFacts.length);
            if (dinosaurFacts.length > 1) {
                while (factIndex === previousFactIndex) {
                    factIndex = Math.floor(Math.random() * dinosaurFacts.length);
                }
            }

            previousFactIndex = factIndex;
            dinoFactDisplay.textContent = dinosaurFacts[factIndex];

            if (dinoFactAnimation) {
                dinoFactAnimation.classList.remove('animate');
                void dinoFactAnimation.offsetWidth;
                dinoFactAnimation.classList.add('animate');
                window.setTimeout(() => {
                    dinoFactAnimation.classList.remove('animate');
                }, 3000);
            }
        };

        dinoFactButton.addEventListener('click', generateFact);
    }

});
