$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText: [ '<i class="fas fa-caret-left"></i>', '<i class="fas fa-caret-right"></i>' ],

        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }

    });
});

$('.slider').on('initialized.owl.carousel changed.owl.carousel', function(e) {
    if (!e.namespace)  {
        return;
    }
    var carousel = e.relatedTarget;
    $('.slider-counter-current').text(  '0'+ (carousel.relative(carousel.current()) + 1));
    $('.slider-counter-length').text( '/0' + carousel.items().length);
});