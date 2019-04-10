$(document).ready(()=>{
    
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

    let nav_list=[
        $('.store-nav-list li:nth-child(1)'),$('.store-nav-list li:nth-child(2)'),$('.store-nav-list li:nth-child(3)'),
        $('.store-nav-list li:nth-child(4)'),$('.store-nav-list li:nth-child(5)'),$('.store-nav-list li:nth-child(6)'),
        $('.store-nav-list li:nth-child(7)'),$('.store-nav-list li:nth-child(8)'),$('.store-nav-list li:nth-child(9)')
    ];

    let nav_area_list=[
        $('.nav-area-list li:nth-child(1)'),$('.nav-area-list li:nth-child(2)'),$('.nav-area-list li:nth-child(3)'),
        $('.nav-area-list li:nth-child(4)'),$('.nav-area-list li:nth-child(5)'),$('.nav-area-list li:nth-child(6)'),
        $('.nav-area-list li:nth-child(7)'),$('.nav-area-list li:nth-child(8)'),$('.nav-area-list li:nth-child(9)'),
        $('.nav-area-list li:nth-child(10)'),$('.nav-area-list li:nth-child(11)'),$('.nav-area-list li:nth-child(12)'),
        $('.nav-area-list li:nth-child(13)'),$('.nav-area-list li:nth-child(14)'),$('.nav-area-list li:nth-child(15)'),
        $('.nav-area-list li:nth-child(16)'),$('.nav-area-list li:nth-child(17)'),$('.nav-area-list li:nth-child(18)'),
        $('.nav-area-list li:nth-child(19)'),$('.nav-area-list li:nth-child(20)'),$('.nav-area-list li:nth-child(21)'),
        $('.nav-area-list li:nth-child(22)'),$('.nav-area-list li:nth-child(23)'),$('.nav-area-list li:nth-child(24)'),
        $('.nav-area-list li:nth-child(25)')
    ];

    let store=$('#store-name');

    $('.store-nav-list li').on('click', ()=>{for(var i=0;i<nav_list.length;i++){nav_list[i].removeClass('on');}});
    for(var i=0;i<nav_list.length;i++){nav_list[i].on('click', function(){$(this).addClass('on')});}

    $('.nav-area-list li').on('click', ()=>{for(var i=0;i<nav_area_list.length;i++){nav_area_list[i].removeClass('on');}});
    for(var i=0;i<nav_area_list.length;i++){nav_area_list[i].on('click', function(){
        $(this).addClass('on');
        var area=$(this).text();
        $('.store-nav-title h4').text(area);
        store.text(area.replace('구','점'));
    });}


});