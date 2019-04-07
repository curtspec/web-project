$(document).ready(()=>{
    
    var screenwWidth = $(document).width();
    var left = (screenwWidth - 1300) / 2;

    $('.footer_float_wrap').css('left', left);

    $(window).resize(()=>{
        screenwWidth = $(document).width();
        left = (screenwWidth - 1300) / 2;

        $('.footer_float_wrap').css('left', left);
    });

    $('#footer_voucher').on('mouseenter', ()=>{
        $('#footer_voucher>img').animate({top:'-=20px'}, 200);
        $('#footer_voucher span.footer_arrow_line').animate({width:'+=20px'}, 200);
    });
    $('#footer_voucher').on('mouseleave', ()=>{
        $('#footer_voucher>img').animate({top:'+=20px'}, 200);
        $('#footer_voucher span.footer_arrow_line').animate({width:'-=20px'}, 200);
    });

    $('#footer_reserve').on('mouseenter', ()=>{
        $('#footer_reserve>img').animate({top:'-=20px'}, 200);
        $('#footer_reserve span.footer_arrow_line').animate({width:'+=20px'}, 200);
    });
    $('#footer_reserve').on('mouseleave', ()=>{
        $('#footer_reserve>img').animate({top:'+=20px'}, 200);
        $('#footer_reserve span.footer_arrow_line').animate({width:'-=20px'}, 200);
    });

    $('#footer_point').on('mouseenter', ()=>{
        $('#footer_point>img').animate({top:'-=20px'}, 200);
        $('#footer_point span.footer_arrow_line').animate({width:'+=20px'}, 200);
    });
    $('#footer_point').on('mouseleave', ()=>{
        $('#footer_point>img').animate({top:'+=20px'}, 200);
        $('#footer_point span.footer_arrow_line').animate({width:'-=20px'}, 200);
    });

});