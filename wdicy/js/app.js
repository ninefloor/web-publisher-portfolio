$(document).ready(function () {
  title();
  menu();
  track();
  parallax();
  physical();
});

// lightbox 설정
lightbox.option({
  resizeDuration: 200,
  wrapAround: false,
  disableScrolling: true,
  fitImagesInViewport: true,
  showImageNumberLabel: false,
  alwaysShowNavOnTouchDevices: true,
});

function title() {
  $(".title").click(function () {
    $(this).stop().fadeOut(500);
    $("#wrap").fadeIn(500);
    rowScroll();
  });
}

function menu() {
  $(".menu_btn").click(function (e) {
    e.preventDefault(); // a 태그 작동 방지
    $(this).toggleClass("active"); // 클릭 시 버튼 X자로 변경
    $("#nav").fadeToggle(400); // #nav 표시
  });
  $("#nav>.menu>.menu_li>a").click(function (e) {
    e.preventDefault(); // a 태그 작동 방지
    let section = $("#wrap>section"); // 섹션 변수 설정
    let target = $(this).closest("li"); // 클릭한 a 태그 부모요소인 li 변수 설정 (eq, index 작동을 위함)
    let index = target.index(); // 인덱스 받아오기
    let sectionIdx = section.eq(index + 1); // 인덱스에 따른 섹션 인덱스 설정
    let offset = sectionIdx.offset().top; // 섹션 별 오프셋 탑 값 변수 설정
    $("html,body").animate({ scrollTop: offset }, 800, "swing"); // 스크롤 동작
    $(".menu_btn").toggleClass("active"); // 메뉴 버튼 원 상태 복귀
    $("#nav").fadeOut(400); // #nav 사라지기
  });
}

function track() {
  let track = [
    new Audio("./audio/wdicy.mp3"),
    new Audio("./audio/playlist.mp3"),
    new Audio("./audio/tothemoon.mp3"),
    new Audio("./audio/wildfire.mp3"),
    new Audio("./audio/galaxy.mp3"),
    new Audio("./audio/happy.mp3"),
  ];
  $(".track_list>li").click(function () {
    let trackIdx = $(this).index();
    console.log(trackIdx);
    let listState = $(this).hasClass("active");
    let playState = $(this).find("h5").hasClass("active");
    console.log(listState);
    console.log(playState);
    if (listState == false && playState == false) {
      $(".track_list>li").removeClass("active");
      $(".track_list>li>h5").removeClass("active");
      $(this).addClass("active");
      $(this).find("h5").addClass("active");
      $("img.cd").addClass("active");
      track[0].pause();
      track[1].pause();
      track[2].pause();
      track[3].pause();
      track[4].pause();
      track[5].pause();
      track[trackIdx].volume = 0.3;
      track[trackIdx].loop = false;
      track[trackIdx].currentTime = 0;
      track[trackIdx].play();
    } else if (listState == true && playState == true) {
      $(this).find("h5").removeClass("active");
      $("img.cd").removeClass("active");
      track[trackIdx].pause();
    } else if (listState == true && playState == false) {
      $(this).find("h5").addClass("active");
      $("img.cd").addClass("active");
      track[0].pause();
      track[1].pause();
      track[2].pause();
      track[3].pause();
      track[4].pause();
      track[5].pause();
      track[trackIdx].volume = 0.3;
      track[trackIdx].loop = false;
      track[trackIdx].currentTime = 0;
      track[trackIdx].play();
    }
  });
}

function parallax() {
  let profile = $(".sec3");
  let profileImg = $(".sec3>.contain>figure>div");
  let track = $(".sec4");
  let trackImg = $(".sec4>.contain>figure>div");
  let video = $(".sec6");
  let videoImg = $(".sec6>.contain>.mv>a");

  $(window).scroll(function () {
    let windowScroll = $(this).scrollTop();
    if (windowScroll >= profile.offset().top - $(window).height() / 3) {
      profileImg.addClass("on");
    }
    if (windowScroll >= track.offset().top - $(window).height() / 3) {
      trackImg.addClass("on");
    }
    if (windowScroll >= video.offset().top - $(window).height() / 3) {
      videoImg.addClass("on");
    }
  });
}

function rowScroll() {
  let scroll = $(".scroll>span");
  $(window).scroll(function () {
    let docHeight = $("body").height();
    let windowScroll = $(this).scrollTop();
    let windowHeight = $(window).height();
    let calcHeight = (windowScroll / (docHeight - windowHeight)) * 100;
    scroll.css({ width: calcHeight + "%" });
  });
}

function physical(e){
  
  let btn = $(".sec2>.contain>.album>button");
  let closeBtn = $(".sec2>.physical>article>.close_btn");
  let layer = $(".sec2>.physical");

  btn.click(function(){
    layer.fadeIn(500);
  });

  closeBtn.click(function(e){
    e.preventDefault();
    layer.fadeOut(500);
  });

}