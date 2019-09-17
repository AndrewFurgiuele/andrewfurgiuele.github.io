$(document).ready(function(){

    $(".link").hover(function(){
        showLinkLabel(true, this);
    }, function(){
        showLinkLabel(false, this);    
    });

  });

  $(this).css("margin-top", "0%");
  $(this).css("height", "9vw");
  $(this).css("width", "9vw");


function showLinkLabel(show, thus){

    if(show){
        $(thus).css("margin-top", "0%");
        $(thus).css("height", "9vw");
        $(thus).css("width", "9vw");
      
    }else{
        $(thus).css("margin-top", "20%");
        $(thus).css("height", "5vw");
        $(thus).css("width", "5vw");
      
    }
}

