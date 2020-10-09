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


var modalBtns = document.querySelectorAll('.modal-open');

modalBtns.forEach(function (btn){
    btn.onclick= function(){
        var modal = btn.getAttribute('data-modal');

        document.getElementById(modal).style.display = 'block';
    };
});

var closeBtns = document.querySelectorAll('.modal-close');

closeBtns.forEach(function(btn) {
    btn.onclick = function() {
        var modal = (btn.closest('.modal').style.display = 'none');
    };
});