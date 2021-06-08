$(document).ready(function () {
  title();
  menu();
  track();
  parallax();
  physical();
  disco();
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

// 타이틀 페이지 기능
function title() {
  // IE 접속 불가 기능
  let agent = navigator.userAgent.toLowerCase();
  if (
    (navigator.appName == "Netscape" &&
      navigator.userAgent.search("Trident") != -1) ||
    agent.indexOf("msie") != -1
  ) {
    // IE로 판별 시 접속 불가 경고창 표시
    $(".title>.alert").show();
    return;
  } else {
    // 아닐 경우 메인 섹션으로 이동 가능
    $(".title").click(function () {
      $(this).stop().fadeOut(500);
      $("#wrap").fadeIn(500);
      // 가로 스크롤바 기능 시작
      rowScroll();
    });
  }
}

// 메뉴 기능
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

// 트랙 섹션 오디오 재생 및 컨텐츠 표시
function track() {
  // 오디오 객체를 배열로 지정
  let track = [
    new Audio("./audio/wdicy.mp3"),
    new Audio("./audio/playlist.mp3"),
    new Audio("./audio/tothemoon.mp3"),
    new Audio("./audio/wildfire.mp3"),
    new Audio("./audio/galaxy.mp3"),
    new Audio("./audio/happy.mp3"),
  ];
  // 트랙 리스트 클릭시 기능 실행
  $(".track_list>li").click(function () {
    let trackIdx = $(this).index(); // 클릭한 li 인덱스 변수 설정
    let listState = $(this).hasClass("active"); // active 클래스 유무 확인 (결과 값 불리언)
    let playState = $(this).find("h5").hasClass("active"); // active 클래스 유무 확인 (결과 값 불리언)
    if (listState == false && playState == false) { // 두가지 모두 active 없을 경우 (다른 음악 재생 또는 음악 재생 아닌 상태)
      // 다른 li에 들어간 기능 모두 제거
      $(".track_list>li").removeClass("active");
      $(".track_list>li>h5").removeClass("active");
      $(".track_list>li>p").slideUp(300, "swing");
      // this에 active 클래스 부여 및 p 표시
      $(this).addClass("active");
      $(this).find("h5").addClass("active");
      $(this).find("p").slideDown(300, "swing");
      // disc 이미지 인터랙션 동작
      $("img.cd").addClass("active");
      // 재생 중이던 음악 모두 정지
      track[0].pause();
      track[1].pause();
      track[2].pause();
      track[3].pause();
      track[4].pause();
      track[5].pause();
      // 클릭한 li 인덱스에 맞게 음악 재생
      track[trackIdx].volume = 0.3;
      track[trackIdx].loop = false;
      track[trackIdx].currentTime = 0;
      track[trackIdx].play();
    } else if (listState == true && playState == true) { // 두가지 모두 active 있을 경우 (해당 음악 재생 중)
      $(this).find("h5").removeClass("active"); // 재생 버튼 변경
      $("img.cd").removeClass("active"); // disc 이미지 인터랙션 정지
      track[trackIdx].pause(); // 음악 정지
    } else if (listState == true && playState == false) { // li는 있지만 h5에는 없는 경우 (해당 음악 정지)
      $(this).find("h5").addClass("active"); // 재생 버튼 변경
      $("img.cd").addClass("active"); // disc 이미지 인터랙션 동작
      // 재생중이던 음악 모두 정지
      track[0].pause();
      track[1].pause();
      track[2].pause();
      track[3].pause();
      track[4].pause();
      track[5].pause();
      // 클릭한 li 인텍스에 맞게 음악 재생
      track[trackIdx].volume = 0.3;
      track[trackIdx].loop = false;
      track[trackIdx].currentTime = 0;
      track[trackIdx].play();
    }
  });
}

// 페럴렉스 기능
function parallax() {
  // 각 요소 변수 설정
  let profile = $(".sec3");
  let profileImg = $(".sec3>.contain>figure>div");
  let track = $(".sec4");
  let trackImg = $(".sec4>.contain>figure>div");
  let video = $(".sec6");
  let videoImg = $(".sec6>.contain>.mv>a");

  // 스크롤 시
  $(window).scroll(function () {
    let windowScroll = $(this).scrollTop(); // 현재 위치 변수 설정
    if (windowScroll >= profile.offset().top - $(window).height() / 3) {
      // 해당 섹션에 도착하면 이미지 표시
      profileImg.addClass("on");
    }
    if (windowScroll >= track.offset().top - $(window).height() / 3) {
      // 해당 섹션에 도착하면 이미지 표시
      trackImg.addClass("on");
    }
    if (windowScroll >= video.offset().top - $(window).height() / 3) {
      // 해당 섹션에 도착하면 이미지 표시
      videoImg.addClass("on");
    }
  });
}

// 가로 스크롤바
function rowScroll() {
  let scroll = $(".scroll>span"); // 요소 변수 설정
  // 스크롤 시
  $(window).scroll(function () {
    let docHeight = $("body").height(); // 문서 전체 높이
    let windowScroll = $(this).scrollTop(); // 현재 위치
    let windowHeight = $(window).height(); // 브라우저 창 높이
    let calcHeight = (windowScroll / (docHeight - windowHeight)) * 100; // 현재 높이 / (문서 전체 높이 - 브라우저 창 높이) 를 백분율로 환산
    scroll.css({ width: calcHeight + "%" }); // 해당 요소의 너비를 백분율만큼의 크기로 표시
  });
}

// 피지컬 버튼
function physical() {
  // 각 요소 변수 선언
  let btn = $(".sec2>.contain>.album>button");
  let closeBtn = $(".sec2>.physical>article>.close_btn");
  let layer = $(".sec2>.physical");

  // 버튼 클릭 시 레이어 표시
  btn.click(function () {
    layer.fadeIn(500);
  });
  // 닫기 버튼 클릭 시 레이어 닫기
  closeBtn.click(function (e) {
    e.preventDefault(); // a 태그 기능 제거
    layer.fadeOut(500);
  });
}

// 디스코그래피 버튼
function disco() {
  // 각 요소 변수 선언
  let btn = $(".sec3>.contain>article>button");
  let closeBtn = $(".sec3>.disco>article>.close_btn");
  let layer = $(".sec3>.disco");

  // 버튼 클릭 시 레이어 표시
  btn.click(function () {
    layer.fadeIn(500);
  });

  // 닫기 버튼 클릭 시 레이어 닫기
  closeBtn.click(function (e) {
    e.preventDefault(); // a 태그 기능 제거
    layer.fadeOut(500);
  });
}
