// JavaScript Document
$( function() {
   $("map area").click( function(){

      if ($(this).attr("id") == "Egypt") {
         $("#feedback").css("color","red");
         $("#feedback").html("No, Egypt among the countries that concidered African Arab countries");
      }

      if ($(this).attr("id") == "Levant") {
         $("#feedback").css("color","green");
         $("#feedback").html("Yes, Syria, Lebanon, Jordan and Palestine considered the countries of Al Mashriq which is,the levant");
      }

      if ($(this).attr("id") == "Sudan") {
         $("#feedback").css("color","red");
         $("#feedback").html("No,Sudan speakes the Arabic Language but is not among the Levant because it is not at the Mideterrenian shore ");
      }
if ($(this).attr("id") == "Saudi") {
         $("#feedback").css("color","red");
         $("#feedback").html("No,Saudi is the one of the gulf countries");
      }

  $("#feedback").css("backgroundColor","yellow");
  $('#myModal').modal("show");


   });
}); //end main jQuery function



