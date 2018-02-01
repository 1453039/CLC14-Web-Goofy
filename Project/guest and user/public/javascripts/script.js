$(document).ready(function() {
    $("a#list").click(function() {
        $("a#list span").addClass("btn-primary");
        $("a#block span").removeClass("btn-primary");
        $("h3#title").text("Top 100 sách bán chạy tháng này");
    });
    $("a#block").click(function() {
        $("a#block span").addClass("btn-primary");
        $("a#list span").removeClass("btn-primary");
        $("h3#title").text("Top 100 sách bán chạy tuần này");
    });
});