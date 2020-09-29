var priceSlider = new Swiper('.price__swiper', {
     // Optional parameters
     direction: 'horizontal',
     loop: true,
     slidesPerView: 4,

     // Navigation arrows
     navigation: {
          nextEl: '.price__swiper-button-prev',
          prevEl: '.price__swiper-button-next',
     },
     breakpoints: {
          500: {
               spaceBetween: 40,
          },
          320: {
               spaceBetween: 15,
          }
     }

})

var mySwiper = new Swiper('.comments__container', {
     // Optional parameters
     direction: 'horizontal',
     loop: true,
     spaceBetween: 10,


     // If we need pagination
     pagination: {
          clickable: true,
          type: 'bullets',
          el: '.comments__pagination',
     },

     // Navigation arrows
     navigation: {
          nextEl: '.comments__button-next',
          prevEl: '.comments__button-prev',
     },

})