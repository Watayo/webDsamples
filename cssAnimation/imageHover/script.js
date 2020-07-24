$(function() {
    // transition
    let $box = $('.box');
    let $button = $('.button');

    $button.on('click', function(){
        $box.toggleClass('active');
    });

    // scroll animation
    $(window).scroll(function (){
        $('.scroll-animation').each(function(){
            let targetElement = $(this).offset().top;
            let scroll = $(window).scrollTop();
            let windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 200){
                $(this).css('opacity','1');
                $(this).css('transform','translateY(0)');
            }
        });S
    });
});


