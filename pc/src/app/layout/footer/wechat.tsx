import React from 'react';

export default () => {

  return (
    <span id="weixin-qrcode" className="ui-weixin-qr1">
      <h2 className="fn-clear">官方微信 <a className="ui-pop-close fn-right"></a></h2>
      <div className="ui-qrleft fn-left">
        <section>
          <img src="/pc/static/images/weixin.png" alt="微信" className="ui-weixin-qrimg"/>
          <p className="ui-qr-name">
            <span>微信号：</span>
            <span>纹桃科技棋牌开发公众号</span>
          </p>
        </section>
        <div>
          <img src="/pc/static/images/qrcode_4.png"/>
          <p>扫一扫，关注纹桃科技</p>
          <p>发现更多精彩</p>
        </div>
      </div>
      <div className="ui-qr-right fn-right">
        <img src="/pc/static/images/weixin-phone.png"/>
      </div>
    </span>
  )
}