$(function () {
  // 풀페이지 JS 설정
  $("#wrap").fullpage({
    // 반응형, width 769px 미만일 경우 자동 높이 적용
    responsiveWidth: 769,
    // 브라우저 크기 변경 시 동작 할 기능
    afterResize: function () {
      // section3 slide1 아티클 높이 설정
      pageHeightFix();
    },
  });

  // 파티클 JS 설정
  particlesJS("back-img-geo", {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 5,
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: false,
          mode: "repulse",
        },
        onclick: {
          enable: false,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  });

  pageHeightFix();
  abilityClickBox();
  pageDescButton();
  copyToClipboard();
  pageHeightFix();
  titleParallex();
});

// section2 플립 카드 기능
function abilityClickBox() {
  $(".flip").click(function () {
    $(this).toggleClass("active");
  });
}

// section3 slide1 포트폴리오 버튼 기능
function pageDescButton() {
  let button = $(".page_selector>a");
  let pages = $(".page_contain article");
  button.on("click", function (e) {
    // a 태그 기능 제거
    e.preventDefault();
    // 클릭한 버튼의 인덱스 할당
    let idx = $(this).index();
    console.log(idx);
    // 클래스 제거 후 클릭한 버튼에 해당되는 아티클에 클래스 부여
    pages.removeClass("active");
    pages.eq(idx).addClass("active");
    // 아티클 높이 설정
    pageHeightFix();
  });
}

// section4 클릭하여 클립보드 복사
function copyToClipboard() {
  // a태그 기능 제거
  $(".copyBtn").on("click", function (e) {
    e.preventDefault();
  });
  // 클립보드 JS 설정
  let clipboardJS = new ClipboardJS(".copyBtn");
  clipboardJS.on("success", function () {
    // 복사 완료 시 복사 완료 툴팁 표시
    $(".copied").show().delay(800).fadeOut(300);
  });
}

// section1 페럴렉스 효과
function titleParallex() {
  $(document).on("mousemove", function (e) {
    let backImg = $(".back-img");
    let backGeo = $("#back-img-geo");
    let winWidth = $(window).width();
    let winHeight = $(window).height();
    // 기준 값을 브라우저 창의 중간으로 맞춤
    let mouseX = e.pageX - winWidth / 2;
    let mouseY = e.pageY - winHeight / 2;
    // 배경 이미지 위치 값
    let perX = (mouseX / winWidth) * 2 + 50;
    let perY = (mouseY / winHeight) * 2 + 50;
    // 파티클 JS 위치 값
    let perGeoX = (mouseX / winWidth) * 5 + 50;
    let perGeoY = (mouseY / winHeight) * 5 + 50;
    // 해당 값으로 CSS 제어
    backImg.css({
      top: `${perX}%`,
      left: `${perY}%`,
    });
    backGeo.css({
      top: `${perGeoX}%`,
      left: `${perGeoY}%`,
    });
  });
}

// section3 slide1 아티클 높이 강제 설정
function pageHeightFix() {
  let activeHeight = $(".page_contain .active").height();
  let pageContain = $(".page_contain");
  // 브라우저 width가 768px 이하 일 경우 (mobile)
  if ($(window).width() <= 768) {
    // 아티클의 height값 감지하여 강제로 고정
    pageContain.css("height", activeHeight);
  }
  // 브라우저 width가 768px 초과 일 경우 (tablet, PC)
  else if ($(window).width() > 768) {
    // 기존 설정인 80%로 설정
    pageContain.css("height", "80%");
  }
}
