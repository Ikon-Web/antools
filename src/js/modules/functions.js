export function sliderReviews() {
    const swiper = new Swiper('.reviews__slider', {
        speed: 700,
        spaceBetween: 100,
        slidesPerView: 1,
        centeredSlides: true,
        initialSlide: 1,
        navigation: {
            nextEl: '.reviews__next',
            prevEl: '.reviews__prev',
        },
        pagination: {
            el: '.reviews__pagination',
            type: 'bullets',
            clickable: 'true',
        },
    });
}