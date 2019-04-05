$(document).ready(()=>{

    $('.dropdown_contents').hide();

    let nav_brand_pos = $('.navbar li:nth-child(1)>a').offset().left;
    let nav_brand_width = $('.navbar li:nth-child(1)>a').width();

    let nav_menu_pos = $('.navbar li:nth-child(2)>a').offset().left;
    let nav_menu_width = $('.navbar li:nth-child(2)>a').width();

    let nav_benefit_pos = $('.navbar li:nth-child(3)>a').offset().left;
    let nav_benefit_width = $('.navbar li:nth-child(3)>a').width();

    let nav_store_pos = $('.navbar li:nth-child(4)>a').offset().left;
    let nav_store_width = $('.navbar li:nth-child(4)>a').width();


    // init position of navigator 
    // represent current page
    let crnt_page_pos = nav_brand_pos;
    let crnt_page_width = nav_brand_width;

    $('#_navigator_').width(crnt_page_width);
    $('#_navigator_').css('left', crnt_page_pos);


    $('._brand_').css('left', $('.navbar li:nth-child(1)').offset().left);
    $('._menu_').css('left', $('.navbar li:nth-child(2)').offset().left);
    $('._benefit_').css('left', $('.navbar li:nth-child(3)').offset().left);

    $(window).resize(()=>{
        nav_brand_pos = $('.navbar li:nth-child(1)>a').offset().left;
        nav_brand_width = $('.navbar li:nth-child(1)>a').width();

        nav_menu_pos = $('.navbar li:nth-child(2)>a').offset().left;
        nav_menu_width = $('.navbar li:nth-child(2)>a').width();

        nav_benefit_pos = $('.navbar li:nth-child(3)>a').offset().left;
        nav_benefit_width = $('.navbar li:nth-child(3)>a').width();

        nav_store_pos = $('.navbar li:nth-child(4)>a').offset().left;
        nav_store_width = $('.navbar li:nth-child(4)>a').width();

        $('._brand_').css('left', $('.navbar li:nth-child(1)').offset().left);
        $('._menu_').css('left', $('.navbar li:nth-child(2)').offset().left);
        $('._benefit_').css('left', $('.navbar li:nth-child(3)').offset().left);

        crnt_page_pos = nav_brand_pos;
        crnt_page_width = nav_brand_width;

        $('#_navigator_').css('left', crnt_page_pos);
    });

    $('.navbar li:nth-child(1)').on('mouseenter', ()=>{
        if( $('._brand_').is(':hidden') ){
            $('._brand_').fadeIn('fast');
        }
        $('#_navigator_').animate({
            left:nav_brand_pos,
            width:nav_brand_width
        }, 300);
    });
    $('.navbar li:nth-child(1)').on('mouseleave', ()=>{
        if( $('._brand_').is(':hover') ){
            $('._brand_').on('mouseleave', ()=>{
                $('._brand_').fadeOut('fast');
            });
        }else{
            $('._brand_').fadeOut('fast');
        }
    });

    $('.navbar li:nth-child(2)').on('mouseenter', ()=>{
        if( $('._menu_').is(':hidden') ){
            $('._menu_').fadeIn('fast');
        }
        $('#_navigator_').animate({
            left:nav_menu_pos,
            width:nav_menu_width
        }, 300);
    });
    $('.navbar li:nth-child(2)').on('mouseleave', ()=>{
        if( $('._menu_').is(':hover') ){
            $('._menu_').on('mouseleave', ()=>{
                $('._menu_').fadeOut('fast');
            });
        }else{
            $('._menu_').fadeOut('fast');
        }
    });

    $('.navbar li:nth-child(3)').on('mouseenter', ()=>{
        if( $('._benefit_').is(':hidden') ){
            $('._benefit_').fadeIn('fast');
        }
        $('#_navigator_').animate({
            left:nav_benefit_pos,
            width:nav_benefit_width
        }, 300);
    });
    $('.navbar li:nth-child(3)').on('mouseleave', ()=>{
        if( $('._benefit_').is(':hover') ){
            $('._benefit_').on('mouseleave', ()=>{
                $('._benefit_').fadeOut('fast');
            });
        }else{
            $('._benefit_').fadeOut('fast');
        }
    });

    $('.navbar li:nth-child(4)').on('mouseenter', ()=>{
        $('#_navigator_').animate({
            left:nav_store_pos,
            width:nav_store_width
        }, 300);
    });

    $('.navbar').on('mouseleave', ()=>{
        $('#_navigator_').animate({
            left:crnt_page_pos,
            width:crnt_page_width
        }, 300);
    });

});