$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        items: 4,
        loop: false,
        margin: 10,
        nav: false,
        dots: true
    });
});

function prevSlide() {
    $('.owl-carousel').trigger('prev.owl.carousel');
}

function nextSlide() {
    $('.owl-carousel').trigger('next.owl.carousel');
}