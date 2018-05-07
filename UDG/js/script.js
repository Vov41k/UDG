$(document).ready(function(){

});



(function() {

  "use strict";

  var toggles = document.querySelectorAll(".c-hamburger");

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
    });
  }

})();



$(document).ready(function(){
    if(($(window).width()<=768) && ($(window).width()>710)){
       $(".wraper").addClass("owl-carousel");
          $(".wraper").addClass("owl-theme");
        $(".first_article").addClass("item");
        $(".second_article").addClass("item");
        $(".third_article").addClass("item");
          $(".owl-carousel").owlCarousel({
            
              loop:true,
              items:2,
              autoplay:true
            
            
                
                
          })
        
    } else {
         $(".wraper").removeClass("owl-carousel");
         $(".wraper").removeClass("owl-theme");
        $(".first_article").removeClass("item");
        $(".second_article").removeClass("item");
        $(".third_article").removeClass("item");
    }
        
})

$(document).ready(function(){
    
      
    $(".img_text").on("mouseover",function(){
        $(this).find(".hiden_text").fadeIn();
//        $(this).css('opacity' ,'0.5')
    });
    $(".img1").on("mouseout",function(){
      $(this).find(".hiden_text").fadeOut();
    })
    
     $(".img2").on("mouseover",function(){
        $(this).find(".hiden_text").fadeIn();
    });
    $(".img2").on("mouseout",function(){
      $(this).find(".hiden_text").fadeOut();
    })
     $(".img3").on("mouseover",function(){
        $(this).find(".hiden_text").fadeIn();
    });
    $(".img3").on("mouseout",function(){
      $(this).find(".hiden_text").fadeOut();
    })
     $(".img4").on("mouseover",function(){
        $(this).find(".hiden_text").fadeIn();
    });
    $(".img4").on("mouseout",function(){
      $(this).find(".hiden_text").fadeOut();
      
    })
    
    
    
 $("#hamburg").on("click",function(){
     $(".navigation").toggle();
     $(".header").toggleClass("header_modal");
     $(".header_main_text").toggleClass("text_opacity")
 });  
  
    $(".globalSearch").on("click",function(){
        $(".search_menu").toggle();
    })
    
})


