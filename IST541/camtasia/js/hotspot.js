// JavaScript Document
$( function() {
   $("map area").click( function(){

      if ($(this).attr("id") == "Syria") {
         $("#feedback").css("color","green");
         $("#feedback").html("Yes, Syria among the Levant countries and their dialect close to the Lebanese dialect");
      }

      if ($(this).attr("id") == "Lebanon") {
         $("#feedback").css("color","green");
         $("#feedback").html("Yes, Lebanon among the Levant countries, located at the Syrian borders");
      }

      if ($(this).attr("id") == "Jordan") {
         $("#feedback").css("color","green");
         $("#feedback").html("No,Jordan is one of the Levant countries, their accent close to Palestinian.");
      }
   
      if ($(this).attr("id") == "Palestine") {
         $("#feedback").css("color","green");
         $("#feedback").html("Yes,Palestine is the forth Levant countries.");
      }
  $("#feedback").css("backgroundColor","yellow");
 $('#myModal').modal("show");

   });
}); //end main jQuery function


