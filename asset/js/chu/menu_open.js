$(document).ready(function(){
    $('.menu-top-visual').animate({"height":"600px","opacity":"1"},500);

    $('.menu-item-hover').hide();

    $('.menu-item-visual').on('mouseenter',function(){
        $(this).children('.menu-item-hover').clearQueue();
        $(this).children('.menu-item-hover').slideToggle(500);
        $(this).closest('li').css("border","1px solid black");
    });
    $('.menu-item-visual').on('mouseleave',function(){
        $(this).children('.menu-item-hover').clearQueue();
        $(this).children('.menu-item-hover').slideToggle(500);
        $(this).closest('li').css("border","1px solid gainsboro");
    });
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