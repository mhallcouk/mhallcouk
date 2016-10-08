var widthAdjustment = 2;
var numberOfActivePanels = 4 - $(".hidden").length;

//CodePlayer specific animation


    


$(document).ready(function() {
    
    breakPage();
    
    function getBrowserSize(){
       var w, h;

         if(typeof window.innerWidth != 'undefined')
         {
          w = window.innerWidth; //other browsers
          h = window.innerHeight;
         } 
         else if(typeof document.documentElement != 'undefined' && typeof      document.documentElement.clientWidth != 'undefined' && document.documentElement.clientWidth != 0) 
         {
          w =  document.documentElement.clientWidth; //IE
          h = document.documentElement.clientHeight;
         }
         else{
          w = document.body.clientWidth; //IE
          h = document.body.clientHeight;
         }
       return {'width':w, 'height': h};
}

    function breakPage() {
    if(parseInt(getBrowserSize().width) < 800){
     document.getElementById("codeplayer").style.visibility ="hidden";
        document.getElementById("screenmessage").style.visibility ="visible";
    } else{
        document.getElementById("codeplayer").style.visibility ="visible";
        document.getElementById("screenmessage").style.visibility ="hidden";
    }
    }

        
    function updateOutput() {
        $("#outputPanel").contents().find("html").html("<html><head><style type='text/css'>" + $("#cssPanel").val() + "</style></head><body>" + $("#htmlPanel").val() + "</body></html>");
        
        document.getElementById("outputPanel").contentWindow.eval($("#javascriptPanel").val());
        
        
    }
    
 
    $(".codeplayertogglebutton").hover(function() {
            $(this).addClass("highlightedbutton");
        }, function(){
        $(this).removeClass("highlightedbutton");
    });
    
    $(".codeplayertogglebutton").click(function(){
        $(this).toggleClass("active");
        $(this).removeClass("highlightedbutton");
        var panelId = $(this).attr("id") + "Panel";
        $("#" + panelId).toggleClass("hidden");
        var numberOfActivePanels = 4 - $(".hidden").length;
        $(".panel").width($(window).width()/numberOfActivePanels - widthAdjustment);
    });
    
    $(".panel").height($(window).height() - 200);
    var numberOfActivePanels = 4 - $(".hidden").length;
    $(".panel").width($(window).width()/numberOfActivePanels - widthAdjustment);
    
    $( window ).resize(function() {
    $(".panel").height($(window).height() - 200);
    var numberOfActivePanels = 4 - $(".hidden").length;
    $(".panel").width($(window).width()/numberOfActivePanels - widthAdjustment);
    breakPage();
});
    
    updateOutput();
    
    $("#htmlPanel").on('change keyup paste', function() {
        updateOutput();
        
});
    
       $("#cssPanel").on('change keyup paste', function() {
        updateOutput();
        
});
  
});