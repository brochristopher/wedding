let nav = document.getElementById('nav')
let navLinks = document.getElementById('nav-links')

$('#hamburger-icon').click(() => {
    if ($(window).width() < 767) {
        $('#sidebar-links').fadeToggle(700);
        $("#sidebar").animate({width:'toggle'}, 700);
    }
});
