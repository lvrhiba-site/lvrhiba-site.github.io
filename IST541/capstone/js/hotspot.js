// JavaScript Document
$( function() {
   $("map area").click( function(){

      if ($(this).attr("id") == "Syria") {
         $("#feedback").css("color","green");
         $("#feedback").html("Yes, Syria among the Levant countries, located on the east coast of the Mediterranean Sea in southern Asia.");
      }

      if ($(this).attr("id") == "Lebanon") {
         $("#feedback").css("color","green");
         $("#feedback").html("Yes, Lebanon among the Levant countries, located at the eastern shore of the Mediterrenian Sea");
      }

      if ($(this).attr("id") == "Jordan") {
         $("#feedback").css("color","green");
         $("#feedback").html("Jordan is one of the Levant countries,located southwest Asia. It has the traces of many civilizations. Jordanians' accent similar to Palestinian.");
      }
   
      if ($(this).attr("id") == "Palestine") {
         $("#feedback").css("color","green");
         $("#feedback").html("Yes,Palestine is the forth Levant countries.Located to the south of Lebanon and the west of Jordan");
      }
  $("#feedback").css("backgroundColor","yellow");
 $('#myModal').modal("show");

   });
}); //end main jQuery function


