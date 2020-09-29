var priceSlider = new Swiper('.price__swiper', {
     // Optional parameters
     direction: 'horizontal',
     loop: true,
     slidesPerView: 4,
     spaceBetween: 40,

     // Navigation arrows
     navigation: {
          nextEl: '.price__swiper-button-prev',
          prevEl: '.price__swiper-button-next',
     },

})