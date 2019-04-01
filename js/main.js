(function($) {
    "use strict";
  
    const bestSlider = $(".rd-articles__slider-main");
  
    bestSlider.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      adaptiveHeight: true,
      fade: false,
      
      prevArrow: ".rd-slider-prev",
      nextArrow: ".rd-slider-next",
      responsive: [
        {
          breakpoint: 768,
          settings: {
            rows: 1,
            slidesPerRow: 1,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  })(jQuery);