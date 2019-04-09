$(document).ready(()=>{

    var avilableWidth = screen.availWidth;
    
    $('.index_image_slide li img').css('width', avilableWidth);

    let image_slide_cnt = 0;
    let image_slide_axis = -1;

    function slideImageStart(){
        $('.index_image_slide').animate({left:'+='+ (image_slide_axis * avilableWidth) +'px'}, 1500);
        
        image_slide_cnt ++;
        if (image_slide_cnt % 2 == 0) {
            image_slide_axis *= -1;
        }
        
    }   

    setInterval(slideImageStart, 4000);

});