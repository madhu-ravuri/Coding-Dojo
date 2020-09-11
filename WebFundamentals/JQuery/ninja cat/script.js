j$(document).ready(function () {

    $(".cat").click(function () {
        var altPic = $(this).attr('data-alt-src');
        $(this).attr("src", altPic)
    });
});