
var BizQQWPA = {
  addCustom: function(){}
}
// 站点常量
var FOXUC = {
  DEBUG: 0,
  ROOT: '/pc/static/script/',
  VERSION: '20191008',
  back: function (){
    var name = decodeURIComponent(top.name);
    var re = /\?main-refresh=(\w+?)(?:\?|$)/;

    if (name.indexOf('name-storage:') === 0 && !re.test(name)) {
      name = name + encodeURIComponent('?main-refresh=true');
    } else {
      name = encodeURIComponent('name-storage:?main-refresh=true');
    }

    // 覆写 window.name
    top.name = name;

    // 后退
    top.history.go(-1);
  },
  open: function (url, name, width, height, top, left){
    name = name || 'FOXUCMISSION' + (new Date()).getTime();
    width = width || 1200;
    height = height || 750;

    // 计算数值
    top = top >= 0 ? top : (window.screen.availHeight - height) / 2 - 32;
    left = left >= 0 ? left : (window.screen.availWidth - width) / 2 - 10;

    var state = 'toolbar=no,menubar=no,scrollbars=yes,'
          + 'location=yes,status=no,channelmode=no,directories=no,'
          + 'top=' + top + ',left=' + left + ','
          + 'width=' + width + ',height=' + height,
      openWindow = window.open(url, name, state);

    // 弹窗设置焦点
    openWindow && openWindow.focus && openWindow.focus();
  },
  close: function(){
    window.close();
  }
};
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-132442101-1');

// var userAgent = navigator.userAgent.toLowerCase();
// if (/ipad|iphone|midp|rv:1.2.3.4|ucweb|android|windows ce|windows mobile/.test(userAgent)) {
//     window.location.href = "http://m.wtqp666.com/";
// }
