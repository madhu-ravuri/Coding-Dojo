$(document).ready(function () {

    $("#top").mouseover(function () {
        var idMatch = $(this).attr("matchId");
        $("#idMatch").fadeIn("slow");
        $("#slide").slideDown(900);
    });

    $("p").mouseover(function () {
        $(this).css('fontStyle', 'italic');
    })

    $("#last").mouseover(function () {
        $("p").fadeOut();
        $("#end").fadeIn();
    });

    $("#end").click(function () {
        $("#wrapper").fadeOut();
        $("#bye").fadeIn();
        $("#start").fadeIn();
    });

    $("#start").click(function () {
        $("#wrapper").fadeIn();
        $("#bye").hide();
        $("p").fadeIn();
    });
});