import React from 'react';

export default () => {

  return (
    <div className="ui-about">
      <div className="ui-about-content">
        <div className="ui-about-left fn-left">
          <div className="ui-product fn-clear">
            <h2>纹桃科技三大棋牌产品</h2>
            <div className="ui-line-box fn-clear">
              <p className="fn-left">纹桃科技推荐三大系列产品，深入挖掘棋牌热点，引领运营趋势</p>
              <a href="/pc/products" className="fn-right">{'更多经典平台 >'}</a>
            </div>
            <div className="fn-clear">
              <div className="ui-product-1">
                <a href="/pc/product">
                  <img src="/pc/static/images/index_product1.png" alt="纹桃科技卓越版" />
                </a>
                <div className="ui-product-msg">
                  <img src="/pc/static/images/index-creator.jpg" alt="" title=""/>
                  <p>纹桃科技卓越平台，COCOS-Creator引擎开发，完美掌控三端用户，APP，H5，PC网页全面支持。</p>
                  <div>
                      <a className="ui-product-btn1" href="/pc/product"></a><a className="ui-product-btn2" rel="nofollow" href="http://wpa.qq.com/msgrd?v=3&uin=2872536059&site=qq&menu=yes" target="_blank"></a>
                  </div>
                </div>
              </div><div className="ui-product-1 p-mg">
                <a href="/pc/product/qj/u3d">
                  <img src="/pc/static/images/index_product2.png" alt="纹桃科技旗舰U3D版" />
                </a>
                <div className="ui-product-msg">
                  <img src="/pc/static/images/index-u3d.jpg" alt="" title=""/>
                  <p>3D立体画面，特效炫酷升级。纹桃科技U3D版，集经典街机+竞技娱乐之精华，引领国际竞技娱乐新潮流。</p>
                  <div>
                      <a className="ui-product-btn1" href="/pc/product/qj/u3d"></a><a className="ui-product-btn2" rel="nofollow" href="http://wpa.qq.com/msgrd?v=3&uin=2872536059&site=qq&menu=yes" target="_blank"></a>
                  </div>
                </div>
              </div><div className="ui-product-1">
                <a href="/pc/product/ry">
                  <img src="/pc/static/images/index_product3.png?v=20200509" alt="纹桃科技旗舰LUA版" />
                </a>
                <div className="ui-product-msg">
                  <img src="/pc/static/images/index-lua.jpg" alt="" title=""/>
                  <p>纹桃科技旗舰平台。Cocos-lua引擎开发，一键热更。精美画面，打造国内高端游戏平台。</p>
                  <div>
                      <a className="ui-product-btn1" href="/pc/product/ry"></a><a className="ui-product-btn2"  rel="nofollow" href="http://wpa.qq.com/msgrd?v=3&uin=2872536059&site=qq&menu=yes" target="_blank"></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ui-about-right fn-left">
          <div className="ui-contact-tel">
            <h2>联系我们</h2>
            <p>您可以拨打服务热线</p>
            <p>或联系企业 QQ 寻求帮助</p>
            {/* <img src="/pc/static/images/contact.png" alt="服务热线" /> */}
            <p style={{fontSize: '30px', marginTop: '20px',marginBottom: '20px'}}>18711739336</p>
          </div>

          <div className="ui-contact-qq">
            <a href="http://wpa.qq.com/msgrd?v=3&uin=2872536059&site=qq&menu=yes" target="_blank" rel="nofollow"></a>
          </div>

          {/* <div className="ui-contact-address">
            <h2>纹桃科技工具</h2>
            <a href="/sign/index.html" target="_blank" title="苹果超级签系统"><img src="/pc/static/images/icon_sign.png" alt="纹桃科技超级签名" /><p>苹果超级签系统</p></a>
          </div> */}
        </div>
      </div>
    </div>
  )
}