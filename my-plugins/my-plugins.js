// (function($) {
//   $.fn.myPlugin = function(options) {
//     var settings = $.extend({
//       option1: defaultValue1,
//       option2: defaultValue2
//     }, options);

//     return this.each(function() {
//       var $element = $(this);

//       // 操作元素，绑定事件等等
//       $element.text(settings.option1);
//       $element.on('click', function() {
//         // 处理点击事件
//       });
//     });
//   };
// })(jQuery);

(function ($) {
  $.fn.myPlugin = function () {
    return this.each(function () {
      const $element = $(this);

      $element.on("blur", function () {
        let te = $element.val();
        $(".redBox").text(te);
      });
    });
  };
})(jQuery);
