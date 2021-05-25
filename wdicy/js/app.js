$(document).ready(function(){
  title();
  menuBtn();
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