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
    });

    $(document).on('scroll', function() {
        if($(this).scrollTop()>=$('#piano').position().top - 500){
            animatePiano();
            $('.piano-content').css('opacity', '1');
            $('.piano-content').css('padding-top', '0px');
        }
    })

    function animatePiano() {


        $(".piano-keys").animate({
            height: '0px'
        }, 0, function () {
            $('.piano-keys').css('height', '250px');
            $('.piano-keys').css('visibility', 'visible');
        });

        $("#pianokey1").animate({
            backgroundColor:'#fff'
        }, 500, function () {
            $('#pianokey1').css('background-color', 'white');
        });

        $("#pianokey2").animate({
            backgroundColor:'#fff'
        }, 750, function () {
            $('#pianokey2').css('background-color', 'black');
        });

        $("#pianokey3").animate({
            backgroundColor:'#fff'
        }, 1000, function () {
            $('#pianokey3').css('background-color', 'white');
            $('.piano-key-letter').css('visibility', 'visible');
        });

        $("#pianokey4").animate({
            backgroundColor:'#fff'
        }, 1250, function () {
            $('#pianokey4').css('background-color', 'black');
        });

        $("#pianokey5").animate({
            backgroundColor:'#fff'
        }, 1500, function () {
            $('#pianokey5').css('background-color', 'white');
        });
        $("#pianokey6").animate({
            backgroundColor:'#fff'
        }, 1750, function () {
            $('#pianokey6').css('background-color', 'white');
        });

        $("#pianokey7").animate({
            backgroundColor:'#fff'
        }, 2000, function () {
            $('#pianokey7').css('background-color', 'black');
        });

        $("#pianokey8").animate({
            backgroundColor:'#fff'
        }, 2250, function () {
            $('#pianokey8').css('background-color', 'white');
        });

        $("#pianokey9").animate({
            backgroundColor:'#fff'
        }, 2500, function () {
            $('#pianokey9').css('background-color', 'black');
        });

        $("#pianokey10").animate({
            backgroundColor:'#fff'
        }, 2750, function () {
            $('#pianokey10').css('background-color', 'white');
        });

        $("#pianokey11").animate({
            backgroundColor:'#fff'
        }, 3000, function () {
            $('#pianokey11').css('background-color', 'black');
        });

        $("#pianokey12").animate({
            backgroundColor:'#fff'
        }, 3250, function () {
            $('#pianokey12').css('background-color', 'white');
        });
    }

    //     $('.piano-key-white').hover(
    //         function (event) {
    //             $('.piano-key-white').css('background-color', '#cb0010')
    //         },
    //         function (event) {
    //             $('.piano-key-white').css('background-color', '#fff')
    //         }
    //     )
    // }

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
                $('.overlay').css('visibility', 'hidden');
            });

            $('.portfolio-item').hover(function() {
                stopCursorAnimation();
                $('.portfolio-item').css('left', '0');
                $('.portfolio-item').css('margin-left', '0');
                $('.overlay').css('opacity', '1');
                $('.overlay').css('visibility', 'visible');
            }, function() {
                // on mouseout, reset the background colour
                $('.portfolio-item').css('left', '50%');
                $('.portfolio-item').css('margin-left', '-125px');
                $('.overlay').css('opacity', '0');
            });

            moveCursorAnimation()

            // animatePiano()

        } else {
            //...
        }
    });

    function moveCursorAnimation() {
            $('.mouse').animate({
                left: '50%',
                top: '125px',
                opacity: '1',
            },1500, function () {
                $('.mouse').css('left', '90%');
                $('.mouse').css('top', '0');
                $('.mouse').css('opacity', '0');
                moveCursorAnimation()
            });
    }

    function stopCursorAnimation() {
        $('.mouse').css('opacity', '0');
        $('.mouse').css('visible', 'none');
        $('.mouse').css('z-index', '0');
        $('.mouse').stop()
    }

})(jQuery); // End of use strict
