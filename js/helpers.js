$(function() {

    $(window).scroll(function() {
        if ($(this).scrollTop() > $(window).height()) {
            $('.move-up').fadeIn();
        } else {
            $('.move-up').fadeOut();
        }
    });
})