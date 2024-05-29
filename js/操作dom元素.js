let newContent1 = "<div>这是一个用append追加的元素</div>";
let newContent2 = "<div>这是一个用prepend追加的元素</div>";
let newContent3 = "<div>这是一个用after追加的元素</div>";
let newContent4 = "<div>这是一个用before追加的元素</div>";

$(".target").css("border", "1px solid blue");
$(".target").append(newContent1);
$(".target").prepend(newContent2);
$(".target").after(newContent3);
$(".target").before(newContent4);

function remove() {
  $(".remove").remove();
}

function empty() {
  $(".empty").empty();
}

$(".target2").css("border", "1px solid red");

function apTo() {
  $("#source").appendTo(".target2");
}

function preTo() {
  $("#source").prependTo(".target2");
}

function inAf() {
  $("#source").insertAfter(".target2");
}

function inBe() {
  $("#source").insertBefore(".target2");
}

function repW() {
  let newCon = $(".target3").text();
  let newCon2 = $("button#replace").text();
  console.log(newCon);
  newCon =
    newCon === "这是一个被替换之后的元素"
      ? "<div class='target3'>这是一个要被替换的元素</div>"
      : "<div class='target3'>这是一个被替换之后的元素</div>";
  newCon2 =
    newCon2 === "还原替换"
      ? "<button id='replace' onclick='repW()'>替换</button>"
      : "<button id='replace' onclick='repW()'>还原替换</button>";
  $(".target3").replaceWith(newCon);
  $("button#replace").replaceWith(newCon2);
}
