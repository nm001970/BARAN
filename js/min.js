let index = 0;
const items = $('.work-item').length;

$(document).ready(function(){
    $('.work-item-inner').click(function(){
        index = $(this).parent('.work-item').index();
        $('.lightBox').addClass('open');
        lightBoxSlideShow();
    });

    $('.lightBox-contorol .perv').click(function(){
        if(index === 0){
            index = items - 1;
        }else{
            index--;  
        }
        lightBoxSlideShow(index);
    })
    $('.lightBox-contorol .next').click(function(){
        if(index === items - 1){
            index = 0;
        }else{
            index++;    
        }
        lightBoxSlideShow(index);
    })
    $('.close').click(function(){
        $('.lightBox').removeClass('open');
    })
    $('.lightBox').click(function(event){
        if($(event.target).hasClass('.lightBox')){
            $(this).removeClass('open')
        }
    })
    function lightBoxSlideShow(index){
        const imgSrc = $('.work-item').eq(index).find('img').attr('data-target');        
        const category = $('.work-item').eq(index).find('.p').html();
        $('.work-item').eq(index).find('.p').addClass('open');
        $('.lightBox-img').attr('src', imgSrc);
        $('.lightBox-category').html(category);
        $('.lightBox-conter').html(items + "/" + (index+1));
    }
});
