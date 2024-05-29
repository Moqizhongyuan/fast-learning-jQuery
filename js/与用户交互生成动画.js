$(".anim").hover(
  () => {
    $(".hide1").fadeIn(500);
  },
  () => {
    $(".hide1").fadeOut(500);
  }
);

$(".anim").click(function () {
  $(this)
    .stop()
    .animate(
      {
        opacity: 0,
        marginTop: "100px",
      },
      1000,
      function () {
        $(this).hide();
      }
    );
  $(".hide2").stop().fadeIn(1000);
});

$(".scroll").css("marginTop", "200px");

$(window).scroll(function () {
  var scrollTop = $(this).scrollTop();

  // 根据滚动位置执行相应的动画效果
  if (scrollTop > 10) {
    $(".scroll").stop().animate({ opacity: 0 }, 1000);
  } else {
    $(".scroll").stop().animate({ opacity: 1 }, 1000);
  }
});
