$(document).ready(function(){

    $(".link-div").hover(function(){
        showLinkLabel(true, $(this));
    }, function(){
        showLinkLabel(false, $(this));    
    });

  });


function showLinkLabel(show, div){
    if(show){
        div.children('p').css("opacity", 1);
    }else{
        div.children('p').css("opacity", 0);
    }
}

