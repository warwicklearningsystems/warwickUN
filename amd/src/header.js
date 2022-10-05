define(["jquery"], function($) {
// DragScroll
    var stop = true;
    $(".activity").on("drag", function (e) {
        stop = true;

        if (e.originalEvent.clientY < 150) {
            stop = false;
            scroll(-1)
        }

        if (e.originalEvent.clientY > ($(window).height() - 150)) {
            stop = false;
            scroll(1)
        }

    });

    $(".activity").on("dragend", function (e) {
        stop = true;
    });

    var scroll = function (step) {
        var scrollY = $(window).scrollTop();
        $(window).scrollTop(scrollY + step);
        if (!stop) {
            setTimeout(function () { scroll(step) }, 20);
        }
    }
});