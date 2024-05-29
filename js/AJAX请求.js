function aj1() {
  $.ajax({
    url: "http://123.207.32.32:8000/home/multidata", // 服务器端点 URL
    method: "GET", // 请求方法
    dataType: "json", // 返回数据类型
    success: function (response) {
      // 请求成功时的回调函数
      // 在这里处理服务器返回的数据
      console.log(response.data);
      response.data.banner.list.forEach((item) => {
        $(".get1").append(`<div>${item.title}</div>`);
      });
    },
    error: function (xhr, status, error) {
      // 请求失败时的回调函数
      // 在这里处理错误情况
      console.log("请求失败: " + error);
    },
  });
}

function aj2() {
  $.get("http://123.207.32.32:8000/home/multidata", (res) => {
    console.log(res.data);
    res.data.recommend.list.forEach((item) => {
      console.log(item);
      $(".get2").append(`<img src='${item.image}'>`);
    });
  });
}

$.post(
  "http://123.207.32.32:8000/home/multidata",
  {
    key1: "recommend",
    // key2: "value2",
  },
  function (response) {
    console.log("请求成功:", response);
    // 在这里处理服务器返回的数据
  }
).fail(function (jqXHR, textStatus, errorThrown) {
  console.log("请求失败:", textStatus, errorThrown);
  // 在这里处理请求失败的情况
});
