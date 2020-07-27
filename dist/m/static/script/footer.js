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