$ (document) .ready (function (){


var hamburger = $('.hamburger');
var active = $('.is-active');   
var menu =$('.mobile-menu');
var link_activ = $('.menu_open');
var  HideMenu = $('.mobile-menu li a');

hamburger.click(function(){
    hamburger.toggleClass('is-active');
    menu.toggleClass('menu_open');
});

HideMenu.click(function(){
    hamburger.removeClass('is-active');
    menu.toggleClass('menu_open');
});


    //scroll страницы
    
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

    //navigation scroll
    
    $('a[href^="#"], *[data-href^="#"]').on('click', function(e){
        e.preventDefault();
        var t = 1000;
        var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
        $('html,body').stop().animate({ scrollTop: $(d).offset().top }, t);
    });


    $(".slide-one").owlCarousel({
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 1000,
        loop: true,
        items: 1,
        responsive : {
            // breakpoint from 0 up
            1024: {
                loop: true,
                items: 1
            }
        }
    });

    $(".slide-two").owlCarousel({
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 800,
        nav: true,
        navText: ['<img src="img/arrow-slider-1.png" class="arrow-left">', '<img src="img/arrow-slider-2.png" class="arrow-right">'],
        loop: true,
        items: 3,
        margin: 10,
            responsive : {
                // breakpoint from 0 up
                0 : {
                    loop: true,
                    items: 1,
                    nav: false
            },
            // breakpoint from 480 up
            480 : {
                loop: true,
                items: 1
        },
        // breakpoint from 768 up
        768 : {
            loop: true,
            margin: 10,
            items: 2
    },
                // breakpoint from 1199 up
                1199 : {
                    loop: true,
                    margin: 10,
                    items: 2
                },
                // breakpoint from 1199 up
                1200 : {
                    loop: true,
                    margin: 10,
                    items: 3
                }
}
    });

    $('#phone').mask('(000) 000-0000');

    /*=== open form ===*/

    $('.btn').click (function(){
        $('#popup-form').fadeIn();
         $('#block-form').css({'top': $(window).scrollTop() +150}).fadeIn();
    });

     $('#popup-form').click (function(){
         $('#popup-form').fadeOut();
          $('#block-form').fadeOut();
     });

     $(window).scroll(function (){
         $('#block-form').css({'top': $(window).scrollTop() +150})
     }).scroll();

    
    //E-mail Ajax Send
    $('#form').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
        if (document.form.name.value == '' || document.form.phone.value == '' ) {
            valid = false;
            return valid;
        }
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function() {
            $('.mail-sent').fadeIn();
            $('#popup-form').fadeOut();
            $('#block-form').fadeOut();
            $(this).find('input').val('');
            $('#form').trigger('reset');
        });
        return false;
    });

// Закрыть попап «спасибо»
$('.mail-sent').click(function() { // по клику на крестик
    $('.mail-sent').fadeOut();
    // $('#popup-form').fadeOut();
    // $('#block-form').fadeOut();
});

// $(document).mouseup(function (e) { // по клику вне попапа
//     var popup = $('.popup');
//     if (e.target!=popup[0]&&popup.has(e.target).length === 0){
//         $('.js-overlay-thank-you').fadeOut();
//     }

  

});