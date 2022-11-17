$(document).ready(function(){

    // HERO SLIDER
    $('#hero-slider').owlCarousel({
        loop:true,
        margin:3,
        nav:true,
        dots: false,
        navText: ['PREV', 'NEXT'],
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 7000,
        items: 1,
        responsive:{
            0:{
                nav: false,
            },
            768:{
                nav: true,
            }
        }
    })

    // PROJECT SLIDER
    $('#project-slider').owlCarousel({
        loop:true,
        margin: 10 ,
        nav:true,
        dots: false,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 7000,
        navText: ['PREV', 'NEXT'],
        responsive:{
            0:{
                items: 1,
                nav: false,
                dots: true,
                margin: 0,
            },
            768:{
                items: 2,
                center: true,
            },
            1140:{
                items: 2,
                center: true,
            }
        }
    })

    $('#reviews-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:true,
        items: 1,
        smartSpeed: 900,
        autoplay: true,
        autoplayTimeout: 4000,
    })
});

const navbar = document.getElementsByTagName('nav')[0];
window.addEventListener('scroll', function() {
    console.log(window.scrollY);
    if (window.scrollY > 1) {
        navbar.classList.replace('bg-transparent', 'nav-color');
    } else if (this.window.scrollY <= 0 ) {
        navbar.classList.replace('nav-color', 'bg-transparent');
    }
});

