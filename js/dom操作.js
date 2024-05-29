$("#highlight").addClass("highlight");
$("#rhighlight").removeClass("highlight");

function togg() {
  $(".togg .to").toggleClass("highlight");
}

const value = $("[data='123']").attr("data");
console.log(value);

function changeAttr() {
  $("[data='123']").attr("data", "456");
}

function removeAt() {
  $("[data]").removeAttr("data");
}

function double() {
  const val = $("#myInput").val();
  console.log(val);
  $("#myInput").val(val * 2);
}

function changeText() {
  const tex = $("#myEl").text();
  console.log(tex);
  $("#myEl").text("修改后的文本");
}

function changeH() {
  const html = $(".root2").html();
  console.log(html);
  $(".root2").html("<p>New HTML</p>");
}
