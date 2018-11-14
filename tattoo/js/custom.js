$(document).ready(function() {

    NProgress.configure({parent: '#pre'});
    NProgress.set(0.6);
    setTimeout(function () {
        NProgress.set(1.0);
        $("#pre").fadeOut();
    }, 500);

    // scroll страницы
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.scroltop').fadeIn();
        } else {
            $('.scroltop').fadeOut();
        }
    });
    $('.scroltop').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });


    $('a[rel="external"]').attr("target", "_blank");

    $(".open-form").on("click", function () {
        $(".modal").fadeIn();
        setTimeout(function(){
            $(".close_cst").addClass("Show");
        }, 600);
    });


    $(".close_cst").on("click", function () {
        $(".modal").fadeOut();
        $(".close_cst").removeClass("Show");
    });


    //masked-input

    $("#modal-form__phone").mask("+7(999) 999-99-99");
    $("#form-item__phone").mask("+7(999) 999-99-99");


    $('#modal-form__email').blur(function() {
        if($(this).val() != '') {
            var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
            if(pattern.test($(this).val())){
                $(this).css({'border' : '1px solid #569b44'});
                $('#valid').css({'color' : '#569b44'});
            } else {
                $(this).css({'border' : '1px solid #ff0000'});
                $('#valid').text('Не верно').css({'color' : '#ff0000'});
            }
        } else {
            $(this).css({'border' : '1px solid #ff0000'});
            $('#valid').css({'color' : '#ff0000'});
        }
    });

    // placeholder
    $('input, textarea').placeholder();

});


$(document).ready (function() {
    checkMedia(); // запускаем при открытии страницы
    $(window).on('resize', function() { // запускаем при каждом ресайзе окна
        checkMedia();
    });
    function checkMedia() {
        var m = $(".mobile-menu");
        var media = window.matchMedia;
        if (media('(min-width: 1024px)').matches) {
            if (media > 1024 +"px") {
                $('.mobile-menu').css('display', 'none');
            }
        }
    }
});

$(document).ready (function (){

//navigation scroll
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();
        var target = this.hash;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop':  $target.offset().top
        }, 1000, 'swing', function () {
            window.location.hash = target;
        });
    });

});


$(document).ready (function() {

    $(".burger").click( function () {
        $(".mobile-menu").fadeIn();
        $(".mobile-menu .close").stop().addClass("active__show").removeClass("active__hide");
    });

    $(".close").click(function() {
        $(".mobile-menu").fadeOut();
        $(".mobile-menu .close").stop().addClass("active__hide").removeClass("active__show");
    });

    $("body").delegate(".mobile-menu .top-menu__list li a", "click", function() {
        $(".mobile-menu").stop().fadeOut();
    });

    $(".top-menu__list").clone().appendTo(".mobile-menu");

    new WOW().init();

    $(function () {
        $('.tlt').textillate ({
            // in : {
            //     effect :  'bounce'
            // },
            initialDelay :  0
        });
    });

        /*---- spincrement ----*/
        var show = true;
        var countbox = ".about-block__number";
        $(window).on("scroll load resize", function () {
            if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
            var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
            var e_top = $('.about').offset().top; // Расстояние от блока со счетчиками до верха всего документа
            var w_height = $(window).height(); // Высота окна браузера
            var d_height = $(document).height(); // Высота всего документа
            var e_height = $('.about').outerHeight(); // Полная высота блока со счетчиками
            if (w_top + 5 >= e_top  || w_height + w_top == d_height) {
                $('.about-block__number').css('opacity', '1');
                $('.about-block__number').spincrement({
                    thousandSeparator: "",
                    duration: 1500
                });

                show = false;
            }
        });

    $('.open-gallery').each(function() {
        $(this).magnificPopup({
            delegate: 'a',
            type: 'image',
            removalDelay: 300,
            mainClass: 'mfp-with-zoom ',
            fixedContentPos: false,
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                // preload: [0,1],
            }
        });
    });

    $('.slider-user').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        arrows: false,
        dots: true,
        adaptiveHeight: true,
        customPaging : function(slider, i) {
            var thumb = $(slider.$slides[i]).data();
            return '<a>'+(i+1)+'</a>';
        },
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

});


$(document).ready (function() {
    var containerEl = document.querySelector('.portfolio-list');
    var mixer = mixitup(containerEl);
});







