/* ==========================================================================
    swiper source
    http://idangero.us/swiper/
    Fancybox source
    http://fancyapps.com/fancybox/3/
    Selectric source
    http://selectric.js.org/
    Remodal source
    http://vodkabears.github.io/remodal/
    Date Picker
    https://github.com/amsul/pickadate.js/edit/master/lib/compressed/picker.js
    https://raw.githubusercontent.com/amsul/pickadate.js/master/lib/compressed/picker.date.js
    Malihu custom scrollbar
    https://raw.githubusercontent.com/malihu/malihu-custom-scrollbar-plugin/master/js/minified/jquery.mCustomScrollbar.min.js
    css3animate-it
    https://raw.githubusercontent.com/Tusko/WP-Anatomy/master/js/libs/css3animate-it.js
  ========================================================================== */

// @formatter:off
/*clickOff*/$.fn.clickOff = function (callback, selfDestroy) {var clicked = false;var parent = this;var destroy = selfDestroy || true;parent.click(function () {clicked = true;});$(document).click(function (event) {if (!clicked) {callback(parent, event);}if (destroy) {}clicked = false;});};
function setCookie (name, value, exdays, path, domain, secure) {
    var d = new Date();
    expires = d.toUTCString(d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000)));
    document.cookie = name + "=" + escape(value) +
    ((expires) ? "; expires=" + expires : "") +
    ((path) ? "; path=" + path : "") +
    ((domain) ? "; domain=" + domain : "") +
    ((secure) ? "; secure" : "");
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return unescape(c.substring(name.length, c.length));
        }
    }
    return "";
}


    $('a[href*="#"]')
    // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 500, function() {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });


// @formatter:on

$(document).ready(function () {
    "use strict";
    $(".mobile_nav").find('.menu-item-has-children>a').after('<i class="fa fa-angle-down sub-anchor" aria-hidden="true"></i>');
    $('.burger').click(function () {
        $(this).toggleClass('is-active');
        $("body").toggleClass('mobile_menu_active');
        return false;
    });
    $('.mobile_menu_container').clickOff(function () {
        $('.burger').removeClass('is-active');
        $("body").removeClass('mobile_menu_active');
        return false;
    });
    $(".menu-item-has-children i").click(function (event) {
        $(this).toggleClass('fa-angle-down fa-angle-up').next().slideToggle("fast");
    });
});