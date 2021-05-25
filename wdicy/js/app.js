

$(document).ready(function(){
  title();
  menuBtn();
  appHeight();
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

const appHeight = () => {
  let agent = navigator.userAgent.toLowerCase();
  if(agent.indexOf('safari')>-1){
    document.documentElement.style.setProperty('--app-height', `${window.innerHeight}px`)
  }
};
window.addEventListener('resize', appHeight);