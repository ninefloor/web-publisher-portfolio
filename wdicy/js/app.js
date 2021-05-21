$(document).ready(function(){
  title();
})

function title(){
  $(".title").click(function(){
    $(this).stop().fadeOut(500);
    $("#wrap").fadeIn(500);
  })
}