//@prepros-prepend ../node_modules/jquery/dist/jquery.js
//@prepros-prepend ../node_modules/bootstrap/dist/js/bootstrap.bundle.js 



/*Custom Start From Here*/
$('.more-detail__icon').click( function(e){
    $(this).toggleClass('expand')
})

$('.filter__item').click(function (e) {
    $(this).toggleClass('active');
})