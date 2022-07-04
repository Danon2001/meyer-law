
new Swiper('.image_swiper',

{
    navigation:
    {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    pagination: {
        el: '.swiper-pagination',
      },

    observer: true,

    observeParents: true,

    observeSlideChildren: true,

    loop: true,

    autoplay:
    {
        delay:10000,
        stopOnLastSlide: false,
        disableOnInteraction: false
    },

    speed:600

}
);

