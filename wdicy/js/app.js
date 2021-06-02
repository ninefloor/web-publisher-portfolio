$(document).ready(function(){
  title();
  menu();
  track();
  parallax();
})

// lightbox 설정
lightbox.option({
  resizeDuration: 200,
  wrapAround: false,
  disableScrolling: true,
  fitImagesInViewport: true,
  showImageNumberLabel: false,
  alwaysShowNavOnTouchDevices: true
});

function title(){
  $(".title").click(function(){
    $(this).stop().fadeOut(500);
    $("#wrap").fadeIn(500);
  })
}

function menu(){
  $(".menu_btn").click(function(e){
    e.preventDefault();
    $(this).toggleClass("active");
    $("#nav").fadeToggle(400);
  })
  $("#nav>.menu>li>a").click(function(e){
    e.preventDefault();
    let section = $("#wrap>section");
    let target = $(this).closest("li");
    let index = target.index();
    let sectionIdx = section.eq(index+1);
    let offset = sectionIdx.offset().top;
    console.log(offset);
    $("html,body").animate({scrollTop:offset},600,"swing");
    $(".menu_btn").toggleClass("active");
    $("#nav").fadeOut(400);
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

function parallax(){
  let profile = $(".sec3");
  let profileImg = $(".sec3>.contain>figure>div");
  let track = $(".sec4");
  let trackImg = $(".sec4>.contain>figure>div");
  let video = $(".sec6");
  let videoImg = $(".sec6>.contain>.mv>a");
  
  $(window).scroll(function(){
    let windowScroll = $(this).scrollTop();
    if(windowScroll >= profile.offset().top - $(window).height()/3){
      profileImg.addClass("on");
    }
    if(windowScroll >= track.offset().top - $(window).height()/3){
      trackImg.addClass("on");
    }
    if(windowScroll >= video.offset().top - $(window).height()/3){
      videoImg.addClass("on");
    }
  })
}