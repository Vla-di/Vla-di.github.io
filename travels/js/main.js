$ (document) .ready (function (){


    //navigation scroll
    $('a[href^="#"], *[data-href^="#"]').on('click', function(e){
        e.preventDefault();
        var t = 1500;
        var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
        $('html,body').stop().animate({ scrollTop: $(d).offset().top }, t);
    });

    // scroll страницы
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.go_to').fadeIn();
        } else {
            $('.go_to').fadeOut();
        }
    });
    $('.go_to').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });

    $(document).on("click", ".top-search", function() {
        $('.form-search').stop().toggleClass('active');
    });

    //mobile menu mobile-menu-button
    $('.fa-bars').click( function () {
        $('.line-top-mobile-block .line-top-mobile').stop().slideToggle(1000);
    });


    // mobile-menu
    $(".line-top-mobile-block").append('<div class="line-top-mobile"></div>');
    $(".line-top-info").clone().appendTo(".line-top-mobile");
    $(".line-search").clone().appendTo(".line-top-mobile");
    $(".form-search").clone().appendTo(".line-top-mobile");
    $(".top-line-navigation").clone().appendTo(".line-top-mobile");
    // $(".top-line-navigation").clone().appendTo(".line-top-mobile");
    // $(".search-icon").addClass('form-mobile');



    var TxtRotate = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtRotate.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 300 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        setTimeout(function() {
            that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('txt-rotate');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-rotate');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new TxtRotate(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        // css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
        document.body.appendChild(css);
    };

    $('.news_slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        appendArrows: ".news-arrow",
        arrows: true,
        speed: 400,
        nextArrow: "<div class='news_next'><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i></div>",
        prevArrow: "<div class='news_prev'><i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i></div>",
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },

        ]

    });


 });



