$ (document) .ready (function (){

var hamburger = $('.hamburger');
var active = $('.is-active');	
var menu =$('.menu');
var link_activ = $('.menu_open');
var  HideMenu = $('.menu a');

hamburger.click(function(){
	hamburger.toggleClass('is-active');
	menu.toggleClass('menu_open');
});

HideMenu.click(function(){
	hamburger.removeClass('is-active');
	menu.toggleClass('menu_open');
});

/*--- Slick ---*/

$('.main-slider').slick({
	  autoplay: true,
	  dots: false,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: false,
      nextArrow: false
  });

/*----- mPageScroll2id -----*/
$("a[href*='#']").mPageScroll2id();

/*--- wow.js ---*/
	new WOW().init();
    
 });