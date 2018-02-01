$(document).ready(function() {

    $("#content-slider").lightSlider({
        item: 1,
        loop: true,
        auto: true,
        keyPress: true,
        slideMargin: 0,
        speed: 1000,
        pause: 5000
    });
    $("#new-book-slider").lightSlider({
        item: 5,
        loop: true,
        auto: true,
        keyPress: true,
        slideMargin: 0,
        speed: 1000,
        pause: 5000,
        pager: false
    });
    $("#best-book-slider").lightSlider({
        item: 5,
        loop: true,
        auto: true,
        keyPress: true,
        slideMargin: 0,
        speed: 1000,
        pause: 5000,
        pager: false
    });
    $("#sale-book-slider").lightSlider({
        item: 5,
        loop: true,
        auto: true,
        keyPress: true,
        slideMargin: 0,
        speed: 1000,
        pause: 5000,
        pager: false
    });

});