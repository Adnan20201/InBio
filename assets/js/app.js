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
})