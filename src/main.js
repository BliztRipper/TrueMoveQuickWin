//@prepros-prepend ../node_modules/jquery/dist/jquery.js
//@prepros-prepend ../node_modules/bootstrap/dist/js/bootstrap.bundle.js 



/*Custom Start From Here*/
$('.more-detail__icon').click( function(e){
    $(this).toggleClass('expand')
})

$('.filter__item').click(function (e) {
    $(this).toggleClass('active');
})

if ($(document).height() < 500 ){ 
    $('.footer').css({
    "postition":"absolute", 
    "left":"50%", 
    "transform":"translateX(-50%)"
    })}
console.log($(document).height());
console.log($(window).height());