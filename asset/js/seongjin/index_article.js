$(document).ready(()=>{


    function slideImageStart(){
        $('.index_image_slide').animate({left:'-=1920px'}, 1500);
        
    }

    setInterval(slideImageStart, 3500);

});