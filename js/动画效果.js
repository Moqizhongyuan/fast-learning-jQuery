function fadeI() {
  $(".anima").fadeIn();
}

function fadeO() {
  $(".anima").fadeOut();
}

function slideU() {
  $(".anima").slideUp();
}

function slideD() {
  $(".anima").slideDown();
}

function anim() {
  $(".anima").animate(
    {
      // backgroundColor: "red",
      width: "200px",
      height: "300px",
    },
    1000
  );
}
