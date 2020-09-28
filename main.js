$(document).ready(function () {
    $('.menu-toggler').on('click', function(){
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    $('.top-nav .nav-link').on('click', function(){
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });

    $('nav a[href*="#"]').on('click', function(){
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 2000);
    });

    $('#up').on('click', function(){
        $('html, body').animate({
            scrollTop: 0
        }, 2000);
    });

    AOS.init({
        easing: 'ease',
        duration: 1800
    });



});



document.getElementById("open-popup-btn").addEventListener("click",function(){
    document.getElementsByClassName("popup")[0].classList.add("active");
});

document.getElementById("dismiss-popup-btn").addEventListener("click",function(){
    document.getElementsByClassName("popup")[0].classList.remove("active");
});



document.getElementById("myopen-popup-btn2").addEventListener("click",function(){
    document.getElementsByClassName("mypopup2")[0].classList.add("active");
});

document.getElementById("mydismiss-popup-btn2").addEventListener("click",function(){
    document.getElementsByClassName("mypopup2")[0].classList.remove("active");
});

document.getElementById("itsopen-popup-btn").addEventListener("click",function(){
    document.getElementsByClassName("itspopup")[0].classList.add("active");
});

document.getElementById("itsdismiss-popup-btn").addEventListener("click",function(){
    document.getElementsByClassName("itspopup")[0].classList.remove("active");
});