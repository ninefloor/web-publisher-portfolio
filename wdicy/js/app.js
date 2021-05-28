$(document).ready(function(){
  title();
  menuBtn();
  track();
})

function title(){
  $(".title").click(function(){
    $(this).stop().fadeOut(500);
    $("#wrap").fadeIn(500);
  })
}

function menuBtn(){
  $(".menu_btn").click(function(e){
    e.preventDefault();
    $(this).toggleClass("active");
    $("#nav").fadeToggle(400);
  })
}

function track(){
  $(".track_list>li").click(function(){
    let listState=$(this).hasClass("active");
    let playState=$(this).find("h5").hasClass("active");
    console.log(listState);
    console.log(playState);
    if(listState==false && playState==false){
      $(".track_list>li").removeClass("active");
      $(".track_list>li>h5").removeClass("active");
      $(this).addClass("active");
      $(this).find("h5").addClass("active");
    } else if(listState==true && playState==true) {
      $(this).find("h5").removeClass("active");
    } else if(listState==true && playState==false) {
      $(this).find("h5").addClass("active");
    }
  })
}