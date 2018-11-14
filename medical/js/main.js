$ (document) .ready (function (){

var hamburger = $('.hamburger');
var active = $('.is-active');	
var menu =$('.modile-menu');
var link_activ = $('.menu_open');
var  HideMenu = $('.modile-menu a');

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
            $('#arrow').fadeIn();
        } else {
            $('#arrow').fadeOut();
        }
    });
    $('#arrow').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });

/*---- spincrement ----*/
var show = true;
   var countbox = ".date";
   $(window).on("scroll load resize", function () {
       if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
       var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
       var e_top = $('#advantages').offset().top; // Расстояние от блока со счетчиками до верха всего документа
       var w_height = $(window).height(); // Высота окна браузера
       var d_height = $(document).height(); // Высота всего документа
       var e_height = $('#advantages').outerHeight(); // Полная высота блока со счетчиками
       if (w_top + 300 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
           $('.date').css('opacity', '1');
           $('.date').spincrement({
               thousandSeparator: "",
               duration: 1500
           });
            
           show = false;
       }
   });

   /*--- video ---*/

$('.vimeo').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 300,
		//preloader: false,

		//fixedContentPos: false
	});

/*--- galery ---*/

$('.gallery-lg').magnificPopup({
		type: 'image',
		removalDelay: 300,
		mainClass: 'mfp-fade'
	});

  /*--- carousel ---*/

$('.owl-carousel').owlCarousel({
    touchDrag: true,
    responsive:{
        0:{
          loop:true,
          autoplay: true,
          autoplayTimeout: 2000,
          items:1
        },
        600:{
          loop:true,
          nav:true,
          margin: 10,
          items:2
        },
        767:{
          loop:true,
          nav:true,
          margin: 10,
          items:3
        },
        990:{
            loop:true,
            items:3,
            nav:true,
            margin: 10,
            //navText : ['<img src="img/prev.png">','<img src="img/next.png">']
        },
        1200:{
            items: 4,
            loop:false,
            margin: 10
        },
    }
});

/*----- mPageScroll2id -----*/
 $("a[href*='#']").mPageScroll2id();

/*--- wow.js ---*/
	// new WOW().init();

/*---- registr-form ----*/

$("#registr-form").validate({
  rules:{
    form_name:{
      required: true
    },
  }
 });

/*--- jquery mask input ---*/

 $("#phone").mask("+34 (999) 999-9999");
    
 });