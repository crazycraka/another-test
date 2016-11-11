$(document).ready(function() {



    $('.drop-down-mobile-menu').hide();
    $('.icon-bars').on('click', function() {
        $('.drop-down-mobile-menu').fadeToggle();
    });


});

localStorage.setItem("name", "scott")

console.log(localStorage.name);