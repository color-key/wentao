import React from 'react';

export default () => {
  // 浮窗
  return (
    <div className="ui-service" id="service-content">
      <div className="ui-service-1">
        <img src="/pc/static/images/service_icon.png" /><span>客服中心</span>
      </div>
      <div className="ui-service-2">
        <img src="/pc/static/images/qrcode_4.png" width="140px"/>
        <p>关注公众号获取行业干货</p>
        <div className="ui-service-btn" id="service">
          在线客服
          <p></p>
        </div>
      </div>
      <div className="ui-service-3">
        <div>张小姐<a rel="nofollow" href="http://wpa.qq.com/msgrd?v=3&uin=2872536059&site=qq&menu=yes" target="_blank"><img src="/pc/static/images/qqtalk.png" alt="QQ交谈" title="QQ交谈" /></a></div>
        <div>刘小姐<a rel="nofollow" href="http://wpa.qq.com/msgrd?v=3&uin=2872536059&site=qq&menu=yes" target="_blank"><img src="/pc/static/images/qqtalk.png" alt="QQ交谈" title="QQ交谈" /></a></div>
        <div>南小姐<a rel="nofollow" href="http://wpa.qq.com/msgrd?v=3&uin=2872536059&site=qq&menu=yes" target="_blank"><img src="/pc/static/images/qqtalk.png" alt="QQ交谈" title="QQ交谈" /></a></div>
        <div>周小姐<a rel="nofollow" href="http://wpa.qq.com/msgrd?v=3&uin=2872536059&site=qq&menu=yes" target="_blank"><img src="/pc/static/images/qqtalk.png" alt="QQ交谈" title="QQ交谈"/></a></div>
      </div>
      <div className="ui-service-4">
        <p>服务热线</p>
        <div>18711739336</div>
      </div>
    </div>
  )
}