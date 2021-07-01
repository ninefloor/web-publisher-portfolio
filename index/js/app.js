$(function(){
  $('#wrap').fullpage({
    responsiveWidth: 769
  });
  abilityClickBox();
  pageDescButton();
})
function abilityClickBox(){
  $('.flip').click(function(){
    $(this).toggleClass('active');
  })
}

function pageDescButton(){
  let button = $('.page_selector>button');
  let pages = $('.page_contain>article');
  button.on("click", function(){
    let idx = $(this).index();
    console.log(idx);
    pages.removeClass('active');
    pages.eq(idx).addClass('active');
  })
}