$(function(){
    $('.fairy-tail__slider').slick({
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="img/svg/prev-arrow.svg"></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="img/svg/next-arrow.svg"></button>',
        autoplay: true,
        fade: true,
        responsive: [
            {
              breakpoint: 601,
              settings: {
                arrows: false
              }
            }
            ]
    });
    $('.our-trip__slider').slick({
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="img/svg/prev-arrow.svg"></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="img/svg/next-arrow.svg"></button>',
        autoplay: true,
        fade: true,
        responsive: [
            {
              breakpoint: 601,
              settings: {
                arrows: false
              }
            }
            ]
    });
    $(".menu, .our-trip__body").on("click","a", function (event) {
       event.preventDefault();
       var id  = $(this).attr('href'),
       top = $(id).offset().top;
       $('body,html').animate({scrollTop: top}, 1500);
      });
      
});
