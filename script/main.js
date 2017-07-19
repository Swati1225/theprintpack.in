(function ($) {

    "use strict";
    $(".carousel-inner .item:first-child").addClass("active");
    /*---------------------------
        MICHIMP INTEGRATION
    -----------------------------*/
    $('#mc-form').ajaxChimp({
        url: 'http://w3dev.us16.list-manage.com/subscribe/post?u=dc318a8da9c5a0e06e12dbb57&amp;id=3c606f799f', //Set Your Mailchamp URL
        callback: function (resp) {
            if (resp.result === 'success') {
                $('.subscribe-form input, .subscribe-form button').fadeOut();
            }
        }
    });


    /* Preloader Js
    ===================*/
    $(window).on("load", function () {
        $('.preloader').fadeOut(500);
    });
})(jQuery);
