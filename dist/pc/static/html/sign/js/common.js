var service = $('#service');
var Arrow = $('#service p');
var content = $('#service-content');

service.on('click', function() {
  if (content.offset().left < 0) {
    content.animate(
      {
        left: 0
      },
      1000,
      function() {
        Arrow.css('background', "url('images/service_arrow_bg.png') no-repeat 0 -25px");
      }
    );
  } else {
    content.animate(
      {
        left: -171
      },
      1000,
      function() {
        Arrow.css('background', "url('images/service_arrow_bg.png') no-repeat 0 0");
      }
    );
  }
});

$('#cnzz_stat_icon_1253493356 a').attr('rel', 'nofollow');
$('.ui-ft-5 a:last-child').attr('rel', 'nofollow');

$(function () {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
       window.location = 'http://m.78fox.cn'; //可以换成http地址
    } else {
    }
});