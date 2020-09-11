$(document).ready(function () {

    $("#hide").click(function () {
        $("#sneaky").hide();
    });

    $("#show").click(function () {
        $("#sneaky").append("<img src='moon pixel header.jpg' alt='moon' id='moon'>");
        $("#sneaky").show();
    });

    $("p#gold").click(function () {
        var color = $(this).attr("tag");
        $(this).css("color", color);
    });

    $("#toggle").click(function () {
        $("#pop").toggle(800);
    });

    $("#down").click(function () {
        $("#pop").slideDown();
    });

    $("#up").click(function () {
        $("#pop").slideUp();
    });

    $("#slidetoggle").click(function () {
        $("#pop").slideToggle("slow");
    });

    $("#open").click(function () {
        $(".bottompics").fadeIn();
    });

    $("#close").click(function () {
        $(".bottompics").fadeOut();
    });

    $("p#big").click(function () {
        $("p#big").addClass("large");
        $("p#big").before("<b>boo!</b>");
    });

    $("p#html").click(function() {
        console.log($(this).html());
      });
});