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

    let store_name=$('#store-name');
    let store_1=$('.store-store-one');
    let store_2=$('.store-store-two');
    let store_3=$('.store-store-three');
    let store_no=$('.store-no-store').hide();

    let store_list = new Array();
    store_list[0];
    store_list[1] = new Array();
    store_list[1][0] = [3];
    store_list[1][1] = ['서대문점','서울 중구 통일로 114(의주로1가,바비엥-2)','T.02-6325-2501','./asset/image/elpoco/store/store_01.jpg'];
    store_list[1][2] = ['을지로입구점','서울 중구 명동3길 42 (을지로2가)','T.02-778-6731','./asset/image/elpoco/store/store_02.jpg'];
    store_list[1][3] = ['동대문점','서울 중구 장충단로13길 20 (을지로6가, 현대시티타워)','T.02-2283-2902','./asset/image/elpoco/store/store_03.jpg'];
    store_list[2] = [1,'어린이대공원점','서울 광진구 광나루로 410(화양동,KCC파크타운)2층','T.02-3436-2691','./asset/image/elpoco/store/store_04.jpg'];
    store_list[3] = [1,'상봉점','서울 중랑구 망우로 293(상봉동)','T.02-434-8491','./asset/image/elpoco/store/store_05.jpg'];
    store_list[4] = [1,'노원점','서울 노원구 동일로 1419(상계동,디와이홀딩스(주)빌딩)','T.02-938-5471','./asset/image/elpoco/store/store_06.jpg'];
    store_list[5] = [1,'구파발점','서울 은평구 통일로 1080(진광동) 삼전솔하임 103동 2층','T.02-354-9791','./asset/image/elpoco/store/store_07.jpg'];
    store_list[6] = [1,'신촌점','서울 서대문구 연세로12길 33(창천동,아웃백스테이크전문점)','T.02-3147-1871','./asset/image/elpoco/store/store_08.jpg'];
    store_list[7] = [1,'합정점','서울 마포구 월드컵로3길 14 (합정동, 마포 한강 2차 푸르지오) 110호','T.02-338-8591','./asset/image/elpoco/store/store_09.jpg'];
    store_list[8] = [1,'목동점','서울 양천구 목동동로 293 (목동, 현대41타워) 3층','T.02-2168-2811','./asset/image/elpoco/store/store_10.jpg'];
    store_list[9] = [1,'공항점','서울 강서구 공항대로 297 (등촌동)','T.02-3661-1101','./asset/image/elpoco/store/store_11.jpg'];
    store_list[10] = [1,'구로AK플라자점','서울 구로구 구로중앙로 152 (구로동, 애경백화점) AK플라자 1층','T.02-855-7921','./asset/image/elpoco/store/store_12.jpg'];
    store_list[11] = [1,'가산점','서울 금천구 디지털로10길 9 (가산동, 현대시티아울렛 가산점) 7층','T.02-2136-9971','./asset/image/elpoco/store/store_13.jpg'];
    store_list[12] = [1,'여의도점','서울 영등포구 국제금융로8길 6 (여의도동) 신영증권빌딩 지하 1층','T.02-761-2961','./asset/image/elpoco/store/store_14.jpg'];
    store_list[13] = [1,'신대방점','서울 동작구 보라매로5가길 16 (신대방동, 보라매아카데미타워) 2층','T.02-821-0671','./asset/image/elpoco/store/store_15.jpg'];
    store_list[14] = [1,'서울대점','서울 관악구 남부순환로 1840 (봉천동) 계림빌딩','T.02-884-4761','./asset/image/elpoco/store/store_16.jpg'];
    store_list[15] = [1,'센트럴시티점','서울 서초구 신반포로 176 (반포동, 센트럴시티빌딩) 중2층 (센트럴 호남선 하차장 앞)','T.02-592-2771','./asset/image/elpoco/store/store_17.jpg'];
    store_list[16] = new Array();
    store_list[16][0] = [3];
    store_list[16][1] = ['강남점','서울 강남구 강남대로 502 (논현동, 서희빌딩) 2층','T.02-515-4791~2','./asset/image/elpoco/store/store_18.jpg'];
    store_list[16][2] = ['코엑스점','서울 강남구 영동대로 513 (삼성동, 코엑스) 오크우드호텔 지하2층','T.02-558-4491','./asset/image/elpoco/store/store_19.jpg'];
    store_list[16][3] = ['도곡점','서울 강남구 남부순환로 2909 (대치동, 여천빌딩)','T.02-564-8601','./asset/image/elpoco/store/store_20.jpg'];
    store_list[17] = [1,'잠실점','서울 송파구 송파대로 466 (송파동, OUTBACK송파점)','T.02-418-4071','./asset/image/elpoco/store/store_21.jpg'];
    store_list[18] = [1,'천호점','서울 강동구 올림픽로 660 (천호동, 천호엘크루주상복합) 지하 1층','T.02-471-1791','./asset/image/elpoco/store/store_22.jpg'];

    let store_name_one=$('#store-name-one');
    let store_name_two=$('#store-name-two');
    let store_name_three=$('#store-name-three');
    let store_address_one=$('#store-address-one');
    let store_address_two=$('#store-address-two');
    let store_address_three=$('#store-address-three');
    let store_tel_one=$('#store-tel-one');
    let store_tel_two=$('#store-tel-two');
    let store_tel_three=$('#store-tel-three');
    let store_img_one=$('#store-img-one');
    let store_img_two=$('#store-img-two');
    let store_img_three=$('#store-img-three');
    
    $('.store-nav-list li').on('click', ()=>{for(var i=0;i<nav_list.length;i++){nav_list[i].removeClass('on');}});
    for(var i=0;i<nav_list.length;i++){nav_list[i].on('click', function(){$(this).addClass('on')});}

    $('.nav-area-list li').on('click', ()=>{for(var i=0;i<nav_area_list.length;i++){nav_area_list[i].removeClass('on');}});
    for(var i=0;i<nav_area_list.length;i++){nav_area_list[i].on('click', function(){
        $(this).addClass('on');
        var area=$(this).text();
        $('.store-nav-title h4').text(area);
        store_name.text();

        store_list[0]=store_list[this.value];

        if(this.value==0){store_1.hide(); store_2.hide(); store_3.hide(); store_no.show();
        }else if(store_list[0][0]==1){store_1.show(); store_2.hide(); store_3.hide(); store_no.hide();
        }else if(store_list[0][0]==2){store_1.show(); store_2.show(); store_3.hide(); store_no.hide();
        }else{store_1.show(); store_2.show(); store_3.show(); store_no.hide();}

        if(store_list[0][0]==1){
            store_name_one.text(store_list[0][1]); store_address_one.text(store_list[0][2]); store_tel_one.text(store_list[0][3]); store_img_one.attr('src',store_list[0][4]);
        }else if(store_list[0][0]==2){
            store_name_one.text(store_list[0][1][0]); store_address_one.text(store_list[0][1][1]); store_tel_one.text(store_list[0][1][2]); store_img_one.attr('src',store_list[0][1][3]);
            store_name_two.text(store_list[0][2][0]); store_address_two.text(store_list[0][2][1]); store_tel_two.text(store_list[0][2][2]); store_img_two.attr('src',store_list[0][2][3]);
        }else if(store_list[0][0]==3){
            store_name_one.text(store_list[0][1][0]); store_address_one.text(store_list[0][1][1]); store_tel_one.text(store_list[0][1][2]); store_img_one.attr('src',store_list[0][1][3]);
            store_name_two.text(store_list[0][2][0]); store_address_two.text(store_list[0][2][1]); store_tel_two.text(store_list[0][2][2]); store_img_two.attr('src',store_list[0][2][3]);
            store_name_three.text(store_list[0][3][0]); store_address_three.text(store_list[0][3][1]); store_tel_three.text(store_list[0][3][2]); store_img_three.attr('src',store_list[0][3][3]);
        }
    });}


});