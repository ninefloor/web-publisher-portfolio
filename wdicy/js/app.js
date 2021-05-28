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
    let idx = $(this).index();
    $(".track_list>li").removeClass("active");
    $(".track_list>li").eq(idx).addClass("active");
  })
}