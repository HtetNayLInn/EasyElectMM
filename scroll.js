  
        $(document).ready(function(){
           $(window).scroll(function(){
                var scroll = $(window).scrollTop();
                if(scroll > 600){
                  $("#nav").css("background","#2A2121");
                }
                else{
                   $("#nav").css("background","#202020");
         }
              })
            })
