$(function () {
    'use strict';

        $('.testimonial-activation').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: true,
            adaptiveHeight: true,
            cssEase: 'linear',
            prevArrow: '<button class="slide-arrow prev-arrow"><i class="fas fa-arrow-left"></i></button>',
            nextArrow: '<button class="slide-arrow next-arrow"><i class="fas fa-arrow-right"></i></button>'
        });

        $('.testimonial-item-one').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: true,
            adaptiveHeight: true,
            cssEase: 'linear',
            prevArrow: '<button class="slide-arrow prev-arrow"><i class="fas fa-arrow-left"></i></button>',
            nextArrow: '<button class="slide-arrow next-arrow"><i class="fas fa-arrow-right"></button>',
            responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                }
            }]
        });

       
        ('.portfolio-slick-activation').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            cssEase: 'linear',
            adaptiveHeight: true,
            prevArrow: '<button class="slide-arrow prev-arrow"><i class="feather-arrow-left"></i></button>',
            nextArrow: '<button class="slide-arrow next-arrow"><i class="feather-arrow-right"></i></button>',
            responsive: [{
                    breakpoint: 1124,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 868,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true,
                        arrows: false,
                    }
                }
            ]
        });



})