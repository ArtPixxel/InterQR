$( document ).ready(function() {
   
   $(".accord__title").click(function(){
    $(this).toggleClass('active_pl');
    $(this).next(".accord__descr").toggleClass('active');
   })

});