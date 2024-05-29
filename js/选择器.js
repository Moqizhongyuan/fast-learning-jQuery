$("p").css("color", "red");
$("div").css("color", "blue");

$(".example").css("border", "1px solid blue");
$(".class1.class2").css("text-decoration", "underline");

$("#myId").css("color", "purple");

$("[data-category='books']").css("text-decoration", "line-through");

$("ul>li").css("color", "green");

$("div.p p").css("color", "pink");

$("h2 + p").css({
  "text-decoration": "overline",
  "text-decoration-style": "solid",
});

$("div.filtration:even").css("color", "gray");
$("div.filtration:first").css("color", "yellow");
$("div.filtration:last").css("color", "brown");
$("div.filtration:contains('filt')").css("color", "skyblue");
