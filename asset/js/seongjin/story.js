$(document).ready(()=>{

    $('.brand_header').animate({
        opacity:1
    },{queue:false, duration:400});

    $('.brand_header').css('backgroundSize', screen.availWidth);

    $('.allround_dropdown_title').on('mouseenter', function(){
        $(this).animate({
            opacity : 1
        }, {queue:false, duration:400});
    });
    $('.allround_dropdown_title').on('mouseleave', function(){
        $(this).animate({
            opacity : 0.4
        }, {queue:false, duration:400});
    });

    $('.allround_dropdown_contents').hide();

    $('.allround_dropdown_title').on('click', function(){
        var s =$(this).next();
        $(s).slideToggle('slow');
        $(s).clearQueue();
        $(s).attr("tabindex", -1).focus();
        $(s).on('blur',function(){
            if( $(s).is(':visible') ){
                $(s).slideUp('slow');
                $(s).clearQueue();
            }
        });
    });


});