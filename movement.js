//Main header animation variables

var delaySeconds = 1000;
var fadeSeconds = 1000;
var firstText = "Mathew Hall";
var secondText = ".developer()";


//CodePlayer specific animation


    


$(document).ready(function() {
    
    
//Mainheader animation
    
  $('#name').text(firstText).delay(delaySeconds).fadeTo(fadeSeconds, 1, function() {
    $('#name').delay(delaySeconds).fadeTo(fadeSeconds, 0, function() {
      $('#name').text(secondText).delay(delaySeconds).fadeTo(fadeSeconds, 1, function() {
        $('#name').delay(delaySeconds).fadeTo(fadeSeconds, 0, function() {
          $('#name').text(firstText).delay(delaySeconds).fadeTo(fadeSeconds, 1, function() {
          });
        });
      });
    });
  });
    
    
});

