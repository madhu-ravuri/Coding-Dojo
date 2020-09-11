$(document).ready(function () {

    $("h").click(function () {
      var color = $(this).attr("colour");
      $(this).css("color", color);
  
      // .text(text) as a setter
      console.log("I'm at line 13")
      $("#Howard").text("The text is changed after a click");
  
      // .text() as a getter
      var titleText = $(this).text();
      console.log("I'm at line 9")
      $("#Madhu").append("<p>" + titleText + "</p>"); 
    });
  
    $("button").click(function(){
        var value = $("#lname").val();
        console.log(value);
        var value2 = $("#cars").val();
        console.log(value2);
        var value3 = $(".x").val();
        console.log(value3);
    })
  
  
  });
  