var vid = document.getElementById("myVideo");
vid.autoplay = true;
vid.loop = true;
vid.muted = true;
vid.load();

var vid1 = document.getElementById("myVideo1");
vid1.autoplay = true;
vid1.loop = true;
vid1.muted = true;
vid1.load();

var vid2 = document.getElementById("myVideo2");
vid2.autoplay = true;
vid2.loop = true;
vid2.muted = true;
vid2.load();

var vid3 = document.getElementById("myVideo3");
vid3.autoplay = true;
vid3.loop = true;
vid3.muted = true;
vid3.load();

var vid4 = document.getElementById("myVideo4");
vid4.autoplay = true;
vid4.loop = true;
vid4.muted = true;
vid4.load();





jQuery(function($){
    var active;
    var boxes = $('.accordion-slider .box').length;
    var singleBoxWidth = (100 / boxes);
    var collapsedWidth = singleBoxWidth - ( singleBoxWidth / ( boxes - 1 ) );
    var openWidth = 100 - (collapsedWidth * ( boxes - 1 ) );

    function accordionSlider() {
        $('.accordion-slider .box').css('width', 100/boxes + '%' )
        $('.accordion-slider .box').on('mouseenter', function(){
            if ( !$(this).hasClass('active') && $(window).width() >= 550 ){
                //hide active elements
                if( active ){
                    TweenLite.to(active.find('.accordion-slider-title'), 0.3, {opacity:0, x:0, overwrite:'all'});
                    TweenLite.to(active.find('.accordion-slider-content'), 0.3, {opacity:0, x:0, overwrite:'all'});
                    TweenLite.to(active.find('.accordion-slider-video'), 0.3, {opacity:0, x:0, overwrite:'all'});
                }
                    
                //introduce new active elements
                var others = $('.accordion-slider .box').not(this);
                active = $(this);
                $(this).addClass('active');
                others.removeClass('active');
                var tl = new TimelineLite();
                tl.to(others, 0.8, {ease: Back.easeOut.config(1.1),width:collapsedWidth + '%'}, 0)
                .to(active, 0.8, {ease: Back.easeOut.config(1.1),width:openWidth + '%'}, 0)
                .to(active.find('.accordion-slider-title'), 0.6, {ease: Back.easeOut.config(1.2),opacity:1, x:100}, 0.3)
                .to(active.find('.accordion-slider-content'), 0.6, {ease: Back.easeOut.config(1.2),x:100, opacity:1}, 0.4)
                .to(active.find('.accordion-slider-video'), 0.6, {ease: Back.easeOut.config(1.2),x:0, opacity:1}, 0.1);
            }

        });
        $('.accordion-slider .box').on('mouseleave', function(){
            if ( $(window).width() >= 550 ){
                var all = $('.accordion-slider .box');
                var tl = new TimelineLite();
                tl.to(all, 0.8, {ease: Back.easeOut.config(1.1),width: 100/boxes + '%'}, 0)
                .to(active.find('.accordion-slider-title'), 0.3, {opacity:0, x:0, overwrite:'all'}, 0)
                .to(active.find('.accordion-slider-content'), 0.3, {opacity:0, x:0, overwrite:'all'}, 0)
                .to(active.find('.accordion-slider-video'), 0.3, {opacity:0, x:0, overwrite:'all'}, 0)
                $(this).removeClass('active');
            }
        });
        if( $(window).width() < 550 ) {
            $('.accordion-slider-title, .accordion-slider-content, .accordion-slider-video').removeAttr('style');
            $('.accordion-slider .box').removeClass('active').css('width', '100%');
        }
            
    }

  accordionSlider()

  $(window).resize(function(){accordionSlider()});


});