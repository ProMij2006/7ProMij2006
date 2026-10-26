$(document).ready(function() {
    const $slider = $('.image-slider');
    const $pager = $('#pager');

    $slider.slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        prevArrow: $('.slick-prev'),
        nextArrow: $('.slick-next'),
        responsive: [
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    
    function updatePager(slick) {
        const slidesToShow = slick.options.slidesToShow;
        const totalSlides = slick.slideCount;
        const currentSlide = slick.currentSlide;
        
        const totalPages = Math.ceil(totalSlides - slidesToShow + 1);
        const currentPage = currentSlide + 1;

        $pager.text('Страница ' + currentPage + ' из ' + totalPages);
    }

    $slider.on('init', function(event, slick) {
        updatePager(slick);
    });

    updatePager($slider.slick('getSlick'));

    $slider.on('afterChange', function(event, slick, currentSlide) {
        updatePager(slick);
    });
});
