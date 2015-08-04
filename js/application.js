// // Loading page animation
// $("img").one("load", function() {
//     $(".se-pre-con").fadeOut("slow");
// }).each(function() {
//   if(this.complete) $(this).load();
// });

//
        (function(){
            //console.log($('.parallax').length);
            if($('.parallax').length != 0) {
                $('.parallax').waitForImages(true).done(function() {
                    $(".se-pre-con").fadeOut("slow");// Loaded all images referenced in CSS.
                    //console.log('???');
                    setTimeout(function(){
                        TweenMax.to(".logo", 2, {'marginTop':'0px', 'opacity': 1, ease: Power4.easeOut});
                    }, 200);
                });
            }
            else{
                if($('.img-responsive').length != 0) {
                    $('.img-responsive').waitForImages(true).done(function() {
                        $(".se-pre-con").fadeOut("slow");// Loaded all images referenced in CSS.
                        //console.log('!!!');
                    });
                }
            }
        })();

$(document).ready(function(){
    if($(window).width()>450){
        $('.about.full-bg1, .about.full-bg2').css('height',$('.lead.lead-large').height()+280);
    }
    //console.log($('.lead.lead-large').height());

    var currentMousePos = { x: -1, y: -1 };
    var flag = false;
    $(document).mousemove(function(event) {
        currentMousePos.x = event.pageX;
        currentMousePos.y = event.pageY;
        //console.log(currentMousePos.y);
        //console.log($('.about.full-bg1').height());
        if(currentMousePos.y < $('.about.full-bg1').height()+60){
            if(!flag) {
                TweenMax.to($('.about.full-bg1'), 0.1, {opacity:0, ease: Power1.easeOut});
                flag = true;
            }
        } else {
            if(flag) {
                TweenMax.to($('.about.full-bg1'), 0.1, {opacity:1, ease: Power1.easeOut});
                flag = false;
            }

        }
    });
    

    $('header').css('height',$(window).height());
    $('.project').css('min-height',$(window).height());
    $('.password-section').css('min-height',$(window).height()*.75);
    // Home page data list
    var list = ["Tokyo, Japan", "Yilan, Taiwan", "San Francisco, CA", "New York, NY", "San Diego", "Vegas", "Grand Canyon", "Rino", "Singapore", "Hong Kong"];    
    var num = Math.floor((Math.random() * 4)+1);

    $('.header').css({"background":"url(img/bg-copy"+num+".jpg) center center no-repeat"});  
    $('.header').css({"background-size":"cover"});
    $('.photo p').text(list[num-1]);

    // About page large text animation
    $('.lead.lead-large').delay(240).animate({opacity:1, 'margin-top':'183px'},500,'easeOutCubic');
    



    window.onkeydown = function(e) {
    if(e.keyCode == 32 && e.target == document.body) {
        e.preventDefault();
        if($('.play').hasClass('fa-play')){
            $('.play').removeClass('fa-play'); $('.play').addClass('fa-pause')
            var video = $('.play').prev('.video');
            video.get(0).play();
            $('.black').fadeIn();
            //$(this).delay(1000).fadeTo(.9,0);
        }
        else {
            $('.play').removeClass('fa-pause'); $('.play').addClass('fa-play')
            var video = $('.play').prev('.video');
            video.get(0).pause();
            $('.black').fadeOut();
            
        }
        return false;
    }
    };

    // Set margins
    var x = $(window).height()/2-350/2;
            $('.header').css('padding-top',x);
    if($(window).height()<$('section.project').children().height()){
        $('section.project').children().css('margin-bottom','100px')
    };
    
    var h = ($(window).height()-220)/2-($('section.project').children().height()-100)/2;
        
    if($(window).height()>$('section.project').children().height()){
        $('section.project').css('margin-top',h);
    }
    
    var k = ($(window).height()-220)/2-380/2;
    if(k < 50) k = 50;
    if($(window).width()<991) $('.info').css('padding-top',50);
    else $('.info').css('padding-top',k);        
    $('.info').css('margin-top',$(window).height());


    // Progressive disclosure images
    $('.hideme').each( function(i){
        var bottom_of_object = $(this).position().top + $(this).outerHeight()/8;
        var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
        if( bottom_of_window > bottom_of_object ){
            $(this).animate({'opacity':'1','margin-top':'-80px'},10,'easeOutQuart');
        }    
    });

    $('.hideme1').each( function(i){
        var bottom_of_object = $(this).position().top + $(this).outerHeight()/2;
        var bottom_of_window = $(window).scrollTop() + $(window).height();
            
        /* If the object is completely visible in the window, fade it it */
        if( bottom_of_window > bottom_of_object ){
            $(this).animate({'opacity':'1'},10,'easeOutQuart');
        }
    });

    // onScroll
    $(window).scroll( function(){
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            var bottom_of_object = $(this).position().top + $(this).outerHeight()/8;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1','margin-top':'-80px'},1000,'easeOutQuart');
            }
            
        }); 
        $('.hideme1').each( function(i){
            var bottom_of_object = $(this).position().top + $(this).outerHeight()/2;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},1000,'easeOutQuart');
            }
            
        }); 
        var v = ($('.play').parent().height()+20)/2;
        $('.play').css('margin-top',-v);

        var x = $(window).height()/2-350/2;
            $('.header').css('padding-top',x);
        
        var h = ($(window).height()-220)/2-($('section.project').children().height()-100)/2;
        
        if($(window).height()>$('section.project').children().height()){
            $('section.project').css('margin-top',h);
        }

        if($(window).height()<$('section.project').children().height()){
            $('section.project').children().css('margin-bottom','100px')
        };

        var k = ($(window).height()-220)/2-380/2;
        if(k < 50) k = 50;
            if($(window).width()<991) $('.info').css('padding-top',50);
            else $('.info').css('padding-top',k);
        $('.info').css('margin-top',$(window).height());
    
    });


    $('#cbp-fwslider').hover(function() {
        $('.cbp-fwslider nav').fadeIn(200);
    }, function() {
        $('.cbp-fwslider nav').fadeOut(200);
    });
    $('#cbp-fwslider1').hover(function() {
        $('.cbp-fwslider nav').fadeIn(200);
    }, function() {
        $('.cbp-fwslider nav').fadeOut(200);
    });
    $('.angle-down').hover(function() {
        $(this).addClass('transition-movedown');
 
    }, function() {
        $(this).removeClass('transition-movedown');
    });
    $('.angle-up').hover(function() {
        $(this).addClass('transition-moveup');
 
    }, function() {
        $(this).removeClass('transition-moveup');
    });

    $('.portfolio-item').hover(function() {
        $(this).children().children().first().addClass('transition');
    }, function() {
        $(this).children().children().first().removeClass('transition');
    });

    $('.portfolio-item').hover(function() {
        $(this).children().children().last().addClass('transition-moveup');
    }, function() {
        $(this).children().children().last().removeClass('transition-moveup');
    });

    $('.icontop').hover(function() {
        $(this).addClass('transition');
 
    }, function() {
        $(this).removeClass('transition');
    });

    $('#logocover').hover(function() {
        $(this).addClass('transition');
 
    }, function() {
        $(this).removeClass('transition');
    });


       
    
    /* video */

    var timeout = null;

    $(document).on('mousemove', function() {
    if (timeout !== null) {
        //$(document.body).text('');
        if($('.play').hasClass('fa-pause')){
            $('.play').fadeTo(1,.9);
        }
        clearTimeout(timeout);
    }
    timeout = setTimeout(function() {
        if($('.play').hasClass('fa-pause')){
            $('.play').fadeTo(1,0);
        }
    }, 2000);
    });


    //$('.video').click(function(){this.paused?this.play():this.pause();});
    $('.play').click(function(){
        if($(this).hasClass('fa-play')){
            $(this).removeClass('fa-play'); $(this).addClass('fa-pause')
            var video = $(this).prev('.video');
            video.get(0).play();
            $('.black').fadeIn();
            //$(this).delay(1000).fadeTo(.9,0);
        }
        else {
            $(this).removeClass('fa-pause'); $(this).addClass('fa-play')
            var video = $(this).prev('.video');
            video.get(0).pause();
            $('.black').fadeOut();
            
        };
    });
    $('.play').hover(function(){
            $(this).fadeTo(1,.9);
    }, function() {
        if($(this).hasClass('fa-play')){
            $(this).fadeTo(1,.5);
        }
        //else $(this).delay(1000).fadeTo(1,0);
    });


            var rm = "";
            $('.section-more .portfolio-item').hover(function(){
                var add_class = ($(this).attr('class').split(' '))[1];
                var remove_class = ($('section.section-more').attr('class').split(' '))[1];
                rm = remove_class;
                $('section.section-more').removeClass(remove_class).addClass(add_class);
                //$(this).parent().siblings().animate({'opacity':'0.5'},250);
            }, function(){
                var remove_class = ($(this).attr('class').split(' '))[1];
                $('section.section-more').removeClass(remove_class).addClass(rm);
                //$(this).parent().siblings().animate({'opacity':'1'},250);
            });


    // for ( var i = 2; i < 11; i++ ) {
    //     $('#page-content'+i).hide();
    // }
    /*
    *   Global variables.
    */
    var pageHeight = $(window).height();
    var pageWidth = $(window).width();
    var navigationHeight = $("#navigation").outerHeight();
    /*
    *   ON RESIZE, check again
    */
    $(window).resize(function () {

        
        pageWidth = $(window).width();
        pageHeight = $(window).height();
        var t = (pageHeight-50-$('.Absolute-Center').height())/2+80;
        if(t <=80) t = 80; 
        $('.Absolute-Center').css('padding-top',t);

        var v = ($('.play').parent().height()+20)/2;
        $('.play').css('margin-top',-v);

        var x = $(window).height()/2-350/2;
            $('.header').css('padding-top',x);
        
        if($(window).height()<$('section.project').children().height()){
            $('section.project').children().css('margin-bottom','100px')
        };
        $('.info').css('margin-top',$(window).height());

        
        var h = ($(window).height()-220)/2-($('section.project').children().height()-100)/2;
        
        if($(window).height()>$('section.project').children().height()){
            $('section.project').css('margin-top',h);
        }

        var k = ($(window).height()-220)/2-380/2;
        if(k < 50) k = 50;
            if($(window).width()<991) $('.info').css('padding-top',50);
            else $('.info').css('padding-top',k);
    

        if(pageWidth < 450){
            $('.lead.lead-large').text('Interaction Designer + Creative Technologist');
            $('.about.full-bg1, .about.full-bg2').css('height', '460px');
        }else{
            $('.lead.lead-large').text('An interaction designer and creative technologist focusing on experience design, interactive installation, and creative coding.');
            $('.about.full-bg1, .about.full-bg2').css('height',$('.lead.lead-large').height()+280);
        }
    });

    var t = (pageHeight-50-$('.Absolute-Center').height())/2+80;
    if(t <=80) t = 80; 
    $('.Absolute-Center').css('padding-top',t);

    var v = ($('.play').parent().height()+20)/2;
    $('.play').css('margin-top',-v);
    /*
    *   ON LOAD
    */

    
    if(window.scrollY > 330) {
            $('.fixedDiv').fadeIn();
            $('#logotitle').fadeIn();
            $('#logotitle').css("visibility","visible");
            $('.fixedDiv').css("visibility","visible");
        }

    $('#logotitle').css('left',pageWidth/2+173);
    $('.gif').hover(function() {
        var source = $(this).attr("src");
        $(this).attr("src", source);
        
    },function(){
        var source = $(this).attr("ssrc");
        $(this).attr("src", source);
        
    }
    );
    // // Fix navigation.
    // if ( document.location.href.indexOf('blog') > -1 || document.location.href.indexOf('about') > -1) {
    //     $('.fixedDiv').fadeIn();
    //     $('#logotitle').fadeIn();
    //     $('#logotitle').css("visibility","visible");
    //     $('.fixedDiv').css("visibility","visible");
        
    //     window.addEventListener("scroll",function() { 
    //     if(window.scrollY > 335) {
            
    //         $('.change').removeClass('arrow-dark');
    //         $('.change').addClass('arrow-light');
    //     }
    //     else {
    //         $('.change').removeClass('arrow-light');
    //         $('.change').addClass('arrow-dark');   
    //     }
    //     },false);
        
        
  // var range = 330;

  // $(window).on('scroll', function() {
  //   var st = $(this).scrollTop();
  //     var offset = $('.callout').offset().top;
  //     var height = $('.callout').outerHeight();
  //     offset = offset + height / 1.1;
  //     $('.callout').css({
  //       'opacity': (1 - ((st - offset + range) / (range)))
  //     });
  // });
  //   }
  //   else {
  //       var pathname = document.location.pathname;
  //       if(pathname.length > 7 || pathname.length<2){
  //       $(window).scroll(function() {
  //   var height = $(window).scrollTop();

  //   if(height > pageHeight-25) {
  //           $('#trigger-overlay').removeClass('changing-light');
  //               $('#trigger-overlay').addClass('changing-dark');
  //               $('.change-all').removeClass('arrow-dark');
  //               $('.change-all').addClass('arrow-light');
  //           }
  //       else {
  //           $('#trigger-overlay').removeClass('changing-dark');
  //               $('#trigger-overlay').addClass('changing-light'); 
  //               $('.change-all').removeClass('arrow-light');
  //               $('.change-all').addClass('arrow-dark');  
  //       }
  //   });
  //   }
        

    //     if(pathname.length > 7 || pathname.length<2){

    //     window.addEventListener("scroll",function() { 
    //     if(window.scrollY > 330) {
    //         $('.fixedDiv').fadeIn();
    //         $('#logotitle').fadeIn();
    //         $('#logotitle').css("visibility","visible");
    //         $('.fixedDiv').css("visibility","visible");
    //         if(window.scrollY > pageHeight-25) {
    //             $('.change-all').removeClass('arrow-dark');
    //             $('.change-all').addClass('arrow-light');
    //             $('#trigger-overlay').removeClass('changing-light');
    //             $('#trigger-overlay').addClass('changing-dark');
    //         }
    //         else {
    //             $('.change-all').removeClass('arrow-light');
    //             $('.change-all').addClass('arrow-dark');  
    //             $('#trigger-overlay').removeClass('changing-dark');
    //             $('#trigger-overlay').addClass('changing-light'); 
    //         }
    //     }
    //     else {
    //         $('.fixedDiv').fadeOut(100);
    //         $('#logotitle').fadeOut(100);
    //     }
    //     },false);
    // }
    // }
    

    // Paralax initialization.
    // Exclude for mobile.
    if(pageWidth > 980){
        //Dont user paralax for tablet and mobile devices.
        /*$('#top').parallax("0%", 0.1);*/
        $('parallax').parallax("0%", 0.1);
        $('.callout').parallax("0%", 0.3);
    }
    if(pageWidth < 450){
        $('.lead.lead-large').text('Interaction Designer +  Creative Technologist');
    }
    else{
        $('.lead.lead-large').text('An interaction designer and creative technologist focusing on experience design, interactive installation, and creative coding.');
    }

    // Scroll to Top
    $("a[href='#top']").click(function() {
        //console.log("???");
        $("html, body").animate({ scrollTop: 0 }, 1000, 'easeInOutCubic');
        return false;
    });
     
     $("a[href='#project']").click(function() {
        $("html, body").animate({ scrollTop: $(window).height() }, 1000, 'easeInOutCubic');
        return false;
     });

});

// $(document).on('mouseover', function(e) {
//         console.log($(e.target).attr('class'));
//     });
/*
*   Ajax request.
*   Start loading.
*   Append loading notification.
*/
$( document ).ajaxSend( function() {
    // Show loader.
    if($(".loading").length == 0) {
        $("body").append('<div class="loading"><div class="progress progress-striped active"><div class="bar"></div></div></div>');
        $(".loading").slideDown();
        $(".loading .progress .bar").delay(300).css("width", "100%");
    }
});

/*
*   Reinitialize Scrollspy after ajax request is completed.
*   Refreshing will recalculate positions of each page in document.
*   Time delay is added to allow ajax loaded content to expand and change height of page.
*/
$( document ).ajaxComplete(function() {

    // Remove loading section.
    $(".loading").delay(1000).slideUp(500, function(){
        $(this).remove();
    });

    // Portfolio details - close.
    $(".close-portfolio span").click(function(e) {
        $(".portfolio-item-details").delay(500).slideUp(500, function(){
            $(this).remove();
        });
        
        window.location.hash= "!";
        return false;
    });
});


//
// var id = document.location.href.split('#')[1];
//             console.log(id);
//             $('input#submitButton').click( function(event) {
//                 event.preventDefault();
//                 var input = $('#password').val();
//                 if(input == "AKQA") {
//                     $('form p').remove();
//                     switch(id){
//                         case 'jordan':
//                             window.location.href = "jordan-hangar/access.html";
//                             break;                    
//                         case 'duo':
//                             window.location.href = "duo-design/access.html";                    
//                             break;
//                         case 'google':
//                             window.location.href = "google-glass/access.html";                    
//                             break;
//                         default:
//                     }
//                 }
//                 else {
//                     $('form p').remove();
//                     $('form').append('<p>The password is incorrect.</p>');
//                 }
//             });
//             $('input#password').click( function(event) {
//                 event.preventDefault();
//                 $('form p').remove();
//             });
//
//http://www.jsobfuscate.com/index.php
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('e d=r.0.3.s(\'#\')[1];t.q(d);$(\'2#o\').j(i(4){4.k();e 2=$(\'#a\').l();m(2=="n"){$(\'5 p\').8();v(d){b\'g\':9.0.3="g-D/7.c";6;b\'f\':9.0.3="f-z/7.c";6;b\'h\':9.0.3="h-C/7.c";6;B:}}A{$(\'5 p\').8();$(\'5\').u(\'<p>y a x w.</p>\')}});$(\'2#a\').j(i(4){4.k();$(\'5 p\').8()});',40,40,'location||input|href|event|form|break|access|remove|window|password|case|html|id|var|duo|jordan|google|function|click|preventDefault|val|if|AKQA|submitButton||log|document|split|console|append|switch|incorrect|is|The|design|else|default|glass|hangar'.split('|'),0,{}))