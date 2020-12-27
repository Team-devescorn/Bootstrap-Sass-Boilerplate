/*-------------------------------------------------------
All javascript and jquery plugins activation
-------------------------------------------------------*/
(function($){
    "use strict";
    
    /*---------------------------
    Smooth scrolling
    ---------------------------*/
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            let hash = this.hash;
            
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });

    /*---------------------------
    Slider
    ---------------------------*/
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots: true,
        responsive:{
            0:{
                items:1
            }
        }
    });
    
})(jQuery);