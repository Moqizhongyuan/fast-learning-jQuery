$("#cl").on("click", () => {
  $(".click").on("click", function () {
    $(this).css(
      "background-color",
      `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)})`
    );
  });
});

$(".all").on("click", ".click", function () {
  console.log(this);
  $(this).css(
    "background-color",
    `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)})`
  );
});

function removeListener() {
  $(".click").off("click");
  $(".all").off("click");
}

$(".box").on("click", function (e) {
  const parentOffset = $(this).offset();
  let x = Math.floor(e.clientX - parentOffset.left);
  let y = Math.floor(e.clientY - parentOffset.top);
  $(this).text(`${x}, ${y}`);
});
