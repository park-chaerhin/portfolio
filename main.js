// $(function (){
//     let origin = window.pageYOffset;
//     add_active(origin);

//     window.addEventListener('scroll', function(){
//         let scroll = window.pageXOffset;
//         add_active(scroll);
//     });
// });

// function add_active (){
//     if (scroll > 0){
//         $('header').addClass('active');
//     } else {
//         $('header').romoveClass('active');
//     }
// }


window.addEventListener("scroll", function() {
    var header = document.getElementById('header');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        header.style.backgroundColor = '#fff';
    } else {
        header.style.backgroundColor = 'unset'; // 초기 배경색
    }
});
