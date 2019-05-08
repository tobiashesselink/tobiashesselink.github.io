(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // $(".portfolio-item").hover(
    //     function(event) {
    //         // The mouse has entered the element, can reference the element via 'this'
    //         console.log(this.)
    //     },
    //     function (event) {
    //         // The mouse has left the element, can reference the element via 'this'
    //     }
    // );

    // $('#portfolio-item,#overlay').mouseenter(function(){
    //     $('#overlay').show();
    // });
    // $('#portfolio-item,#overlay').mouseleave(function(){
    //     $('#overlay').hide();
    // });

    // Initialize and Configure Magnific Popup Lightbox Plugin
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });

    $(function() {
        if (window.matchMedia('(min-width: 992px)').matches) {
            $('.overlay').hover(function() {
                $('.portfolio-item').css('left', '0');
                $('.portfolio-item').css('margin-left', '0');
                $('.overlay').css('opacity', '1');
            }, function() {
                // on mouseout, reset the background colour
                $('.portfolio-item').css('left', '50%');
                $('.portfolio-item').css('margin-left', '-125px');
                $('.overlay').css('opacity', '0');
            });

            $('.portfolio-item').hover(function() {
                $('.portfolio-item').css('left', '0');
                $('.portfolio-item').css('margin-left', '0');
                $('.overlay').css('opacity', '1');
            }, function() {
                // on mouseout, reset the background colour
                $('.portfolio-item').css('left', '50%');
                $('.portfolio-item').css('margin-left', '-125px');
                $('.overlay').css('opacity', '0');
            });
        } else {
            //...
        }
    });

})(jQuery); // End of use strict
