  
        $(document).ready(function(){
           $(window).scroll(function(){
                var scroll = $(window).scrollTop();
                if(scroll > 600){
                  $("#nav").css("background","#542630");
                }
                else{
                   $("#nav").css("background","#202020");
         }
              })
            })
