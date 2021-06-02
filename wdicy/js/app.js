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
    e.preventDefault(); // a 태그 작동 방지
    $(this).toggleClass("active"); // 클릭 시 버튼 X자로 변경
    $("#nav").fadeToggle(400); // #nav 표시
  })
  $("#nav>.menu>li>a").click(function(e){
    e.preventDefault(); // a 태그 작동 방지
    let section = $("#wrap>section"); // 섹션 변수 설정
    let target = $(this).closest("li"); // 클릭한 a 태그 부모요소인 li 변수 설정 (eq, index 작동을 위함)
    let index = target.index(); // 인덱스 받아오기
    let sectionIdx = section.eq(index+1); // 인덱스에 따른 섹션 인덱스 설정
    let offset = sectionIdx.offset().top; // 섹션 별 오프셋 탑 값 변수 설정
    $("html,body").animate({scrollTop:offset},800,"swing"); // 스크롤 동작
    $(".menu_btn").toggleClass("active"); // 메뉴 버튼 원 상태 복귀
    $("#nav").fadeOut(400); // #nav 사라지기
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
    if(windowScroll >= profile.offset().top - $(window).height()/2){
      profileImg.addClass("on");
    }
    if(windowScroll >= track.offset().top - $(window).height()/2){
      trackImg.addClass("on");
    }
    if(windowScroll >= video.offset().top - $(window).height()/2){
      videoImg.addClass("on");
    }
  })
}