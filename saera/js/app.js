$(document).ready(function(){
  pcNav();
})

let gnb = $(".nav>ul>li");
let lnb = $(".lnb");
let wing = $(".wing");

function pcNav(){
  gnb.hover(
    function(){
      lnb.stop().fadeIn(600);
      wing.stop().slideDown(300);
    },
    function(){
      lnb.stop().fadeOut(200);
      wing.stop().slideUp(400);
    }
  )
}



lightbox.option({
  resizeDuration: 200,
  wrapAround: false,
  disableScrolling: true,
  fitImagesInViewport: true,
  showImageNumberLabel: false,
  alwaysShowNavOnTouchDevices: true
});


