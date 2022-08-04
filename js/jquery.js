// BEGINNER JQUERY
/* JQUERY CODE */

// TOGGLE PROFIL MENU
$(document).ready(function () {
    var menu = $('#profil');
    menu.click(function() {
        $('.profil').slideToggle(200);
        console.log(menu);
    });
    // TOGGLE CLASS D-NONE TO THE NAV MOBILE MENU
    // SHOW NAV
    $('#showNav').click(function() {
        $('#showNav').addClass('d-none');
        $('#closeNav').removeClass('d-none');
        $('.phone').fadeIn(300);
        $('.phone').css('display', 'flex');
    });
    // CLOSE NAV
    $('#closeNav').click(function() {
        $('#showNav').removeClass('d-none');
        $('#closeNav').addClass('d-none');
        $('.phone').fadeOut(300);
        $('.phone').css('display', 'flex');
    });
});
