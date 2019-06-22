$(function () {

    var $btn = $('.js-btn-top');

    $btn
        .hide()
        .click(function () {
            // $('html, body').scrollTop(0);
            // $('html, body').prop('scrollTop', 0);

            $('html, body').animate({ scrollTop: 0 }, 700);
        });

    /**
     * $window - Обертка jQuery
     */
    var $window = $(window);
    /**
     * Высота браузерного окна
     */
    var windowHeight = $window.height();
    var offset = windowHeight / 4;

    var show = false;
    function btnShow() {
        if (window.scrollY >= offset && show === false) {
            $btn.show('fast');
            show = true;
        }
        else if (window.scrollY < offset && show === true) {
            $btn.hide('fast');
            show = false;
        }
    }

    btnShow();
    $window.scroll(btnShow);

});