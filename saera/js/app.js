$(document).ready(function(){
  pcNav();
  mNav();
  // 화면 너비가 768px보다 커지면 m_nav 사라짐
  $(window).resize(function(){
    let width = window.outerWidth;
    if(width >= 768){
      m_nav.css({left: "-"+100+"%"});
    }
  })
  // slick 사용
  $('.slide').slick({
    slide: 'div', // 슬라이드 될 요소
    infinite: true, // 무한 슬라이드
    fade: true, // 페이드 전환 방식
    speed: 300, // 전환 속도
    arrows: false, // 화살표
    dots: false, // 인디케이터
    autoplay: true, // 자동 전환
    autoplaySpeed: 4000, // 자동전환 주기
    pauseOnHover: false, // 호버 시 자동전환 정지
    mobileFirst: true, // 모바일향
    respondTo: 'window',
    responsive:[ // 반응형 옵션
      {
        breakpoint: 768, // 브레이크 포인트 768px
        settings:{
          arrows: true // 화살표 숨김
        }
      }
    ]
  })
})

let gnb = $(".nav>ul>li");
let lnb = $(".lnb");
let wing = $(".wing");

// PC nav 구현
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

let m_menu_btn = $(".m_menu_btn>i");
let m_nav = $("#m_nav");
let m_nav_bg = $(".m_nav_bg");
let m_nav_li = $(".m_menu_list>li");
// 모바일 메뉴 구현
function mNav(){
  // 햄버거 버튼 클릭 시 메뉴 표시
  m_menu_btn.click(function(){
    console.log("click")
    m_nav.animate({left: 0},300);
    m_nav_bg.fadeIn(300);
  })
  // 메뉴 레이어 바깥 클릭 시 사라짐
  m_nav_bg.click(function(){
    m_nav.animate({left: "-"+100+"%"},300);
    m_nav_bg.fadeOut(300);
  })
  // gnb 클릭 시 lnb 토글 표시
  m_nav_li.click(function(){
    $(this).find(".m_lnb").toggle(
      function(){
        $(this).find(".m_lnb").stop().slideToggle(300);
      }
    )
  })
}


// lightbox 설정
lightbox.option({
  resizeDuration: 200,
  wrapAround: false,
  disableScrolling: true,
  fitImagesInViewport: true,
  showImageNumberLabel: false,
  alwaysShowNavOnTouchDevices: true
});


