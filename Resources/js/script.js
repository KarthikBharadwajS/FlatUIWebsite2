$(document).ready(function() {

    /* Navigation Bar Animation */ 
    $('.js--section-features').waypoint(function(direction) {
        if ( direction === "down") {
            $('#navbar').addClass('sticky');
        } else {
            $('#navbar').removeClass('sticky');
        }
    }, { offset: '60px;'});

    /* Auto Scroll Effect */
    $('.js--scroll-to-plans').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });
    $('.js--scroll-to-start').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });

    /* Navigation Scroll */
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
            || location.hostname == this.hostname) {
    
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
               if (target.length) {
                 $('html,body').animate({
                     scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

    /* Animations on scroll */
    // https://daneden.github.io/animate.css/

    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: "50%"
    })

    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated pulse');
    }, {
        offset: "50%"
    })

    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated bounceInUp');
    }, {
        offset: "70%"
    })

});