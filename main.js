$(function (){
    let origin = window.pageYOffset;
    add_active(origin);

    window.addEventListener('scroll', function(){
        let scroll = window.pageXOffset;
        add_active(scroll);
    });
});

function add_active (){
    if (scroll > 0){
        $('header').addClass('active');
    } else {
        $('header').romoveClass('active');
    }
}