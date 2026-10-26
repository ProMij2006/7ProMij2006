/*global $, document*/
/*eslint-env browser*/

(function () {
    "use strict";

    var $slider = $(".image-slider");
    var $pager = $("#pager");

    function updatePager(slick) {
        var slidesToShow = slick.options.slidesToShow;
        var totalSlides = slick.slideCount;
        var currentSlide = slick.currentSlide;
        var totalPages = Math.ceil(totalSlides - slidesToShow + 1);
        var currentPage = currentSlide + 1;

        $pager.text("Страница " + currentPage + " из " + totalPages);
    }

    $slider.slick({
        arrows: true,
        infinite: false,
        nextArrow: $(".slick-next"),
        prevArrow: $(".slick-prev"),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 1
                }
            }
        ],
        slidesToScroll: 1,
        slidesToShow: 3
    });

    $slider.on("init", function (event, slick) {
        if (event) {
            updatePager(slick);
        }
    });

    updatePager($slider.slick("getSlick"));

    $slider.on("afterChange", function (event, slick) {
        if (event) {
            updatePager(slick);
        }
    });
}());
