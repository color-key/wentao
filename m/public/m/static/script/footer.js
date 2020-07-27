var userAgent = navigator.userAgent.toLowerCase();
var qqlink;
$('.qq-link').on('click', function () {
    if (userAgent.indexOf('baidu') > 0 || userAgent.indexOf('ubrowser') > -1 || userAgent.indexOf('ucbrowser') > -1) {
        qqlink = "http://p.qiao.baidu.com/cps/chat?siteId=10112377&userId=3809269";
    } else {
        qqlink = $(this).attr('data-url');
    }
    location.href = qqlink;
});

var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?a836200f7f1be65d1f1f3cf022424dd6";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();