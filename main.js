var swiper = new Swiper(".testimonial_swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: false,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
    // when window width is >= 992px
    992: {
        slidesPerView: 3,
        slidesPerGroup: 3,
    },
    // when window width is >= 576px
    576: {
        slidesPerView: 2,
        slidesPerGroup: 2,
    }
}
});


