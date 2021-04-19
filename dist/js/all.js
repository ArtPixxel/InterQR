$( document ).ready(function() {
   
   $(".accord__title").click(function(){
    $(this).toggleClass('active_pl');
    $(this).next(".accord__descr").toggleClass('active');
   })


    $('.slider__wrap').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        rtl: true,
        centerMode: true,
        centerPadding: '20px',
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '20px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '20px',
              slidesToShow: 1
            }
          }
        ]
      });

      
});