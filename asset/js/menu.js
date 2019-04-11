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
});