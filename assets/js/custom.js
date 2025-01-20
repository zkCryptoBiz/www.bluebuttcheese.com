(function ($) {
    //preloader js
    $(window).on('load', function () {
        $('.preloader').fadeOut(1000);
    })


    //Header
    var fixed_top = $("header");
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 200) {
            fixed_top.addClass("header--fixed animated fadeInDown");
        } else {
            fixed_top.removeClass("header--fixed animated fadeInDown");
        }
    });


    /*==== Multipage header Section Start here =====*/
    $("ul>li>.submenu").parent("li").addClass("menu-item-has-children");
    // drop down menu width overflow problem fix
    $('ul').parent('li').on('hover', function () {
        var menu = $(this).find("ul");
        var menupos = $(menu).offset();
        if (menupos.left + menu.width() > $(window).width()) {
            var newpos = -$(menu).width();
            menu.css({
                left: newpos
            });
        }
    });
    $('.menu li a').on('click', function (e) {
        var element = $(this).parent('li');
        if (parseInt($(window).width()) < 992) {
            if (element.hasClass('open')) {
                element.removeClass('open');
                element.find('li').removeClass('open');
                element.find('ul').slideUp(300, "swing");
            } else {
                element.addClass('open');
                element.children('ul').slideDown(300, "swing");
                element.siblings('li').children('ul').slideUp(300, "swing");
                element.siblings('li').removeClass('open');
                element.siblings('li').find('li').removeClass('open');
                element.siblings('li').find('ul').slideUp(300, "swing");
            }
        }
    });

    $('.header-bar').on('click', function () {
        $(this).toggleClass('active');
        $('.menu').toggleClass('active');
    })

    $('.menu li').on('click', function (e) {
        if (parseInt($(window).width()) < 992) {
            if (!$(this).hasClass("menu-item-has-children")) {
                $('.header-bar').removeClass('active');
                $('.menu').removeClass('active');
            }
        }
    });
    /*==== Multipage header Section End here =====*/


    //Animation on Scroll initializing
    AOS.init();








    //banner slider

    var swiper = new Swiper(".banner__thumb-slider-1", {
        direction: "vertical",
        spaceBetween: 10,
        grabCursor: true,
        loop: true,
        slidesPerView: 2,
        autoplay: {
            delay: 1,
        },
        speed: 3000,
    });


    // banner slider 2
    var swiper = new Swiper(".banner__thumb-slider-2", {
        direction: "vertical",
        spaceBetween: 10,
        grabCursor: true,
        loop: true,
        slidesPerView: 3,
        autoplay: {
            delay: 1,
            reverseDirection: true,
        },
        speed: 4000,
    });



    // banner slider 3
    var swiper = new Swiper(".banner__thumb-slider-3", {
        direction: "vertical",
        spaceBetween: 10,
        grabCursor: true,
        loop: true,
        slidesPerView: 2,
        autoplay: {
            delay: 1,
        },
        speed: 3000,
    });




    //collection slider

    var swiper = new Swiper(".collection__slider1", {
        spaceBetween: 24,
        grabCursor: true,
        loop: true,
        slidesPerView: 3,
        breakpoints: {
            0: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
            },
        },
        autoplay: {
            delay: 1,
        },
        speed: 3000,
    });


    // collection slider 2
    var swiper = new Swiper(".collection__slider2", {
        spaceBetween: 24,
        grabCursor: true,
        loop: true,
        slidesPerView: 3,
        breakpoints: {
            0: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
        },
        autoplay: {
            delay: 1,
            reverseDirection: true,
        },
        speed: 4000,
    });


    //collection slider -home2

    var swiper = new Swiper(".collection__slider1--home2", {
        spaceBetween: 0,
        grabCursor: true,
        loop: true,
        slidesPerView: 3,
        breakpoints: {
            576: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 5,
            },

            992: {
                slidesPerView: 6,
            },
            1200: {
                slidesPerView: 7,
            },
        },
        autoplay: {
            delay: 1,
        },
        speed: 3000,
    });


    // collection slider 2 - home2
    var swiper = new Swiper(".collection__slider2--home2", {
        spaceBetween: 0,
        grabCursor: true,
        loop: true,
        slidesPerView: 3,
        breakpoints: {
            576: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 5,
            },

            992: {
                slidesPerView: 6,
            },
            1200: {
                slidesPerView: 7,
            },
        },
        autoplay: {
            delay: 1,
            reverseDirection: true,
        },
        speed: 3000,
    });











})(jQuery);
