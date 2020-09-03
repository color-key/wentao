import React from 'react';

export default () => {
  return (
    <>
    <div className="pagination"></div>
    <div className="sale_btn_box fn-clean-space" id="sell">
        <a data-id="phonesell"><i></i><img src="/m/static/images/phone_sale_active3.png"/></a>
        <a data-id="pcsell"><i></i><img src="/m/static/images/pc_sale2.png"/></a>
    </div>
    <div className="gamehall_download" id="phonesell">
        <div className="classicalhall_download">
        <img src="/m/static/images/lm-sell.png"/>
        <div>
            <p>纹桃科技LUA平台</p>
            <p>纹桃科技旗舰平台。Cocos-lua引擎开发，一键热更。精美画面，打造国内高端游戏平台。</p>
        </div>
        <a href="/m/lualm">查看游戏大厅</a>
    </div>
    <div className="classicalhall_download">
        <img src="/m/static/images/zy-sell.png"/>
        <div>
            <p>纹桃科技Creator卓越平台</p>
            <p>1、Cocos-Creator开发，APP、H5、PC网页全面支持 2、支持浏览器运行，规避微信域名封禁 3、全民推广代理，阶梯消耗返利</p>
        </div>
        <a href="/m/luazy">查看游戏大厅</a>
    </div>
    <div className="ryhall_download">
        <img src="/m/static/images/udp-sell.png"/>
        <div>
            <p>纹桃科技U3D娱乐平台</p>
            <p>1、精致画面，特效酷炫升级 2、全新Unity3D开发，引领棋牌开发技术潮流 3、街机、休闲游戏3D效果仿佛身临其境</p>
        </div>
        <a href="/m/u3d">查看游戏大厅</a>
    </div>

</div>

<div className="gamehall_download none" id="pcsell">
    
        <div className="classicalhall_download_1">
         <img src="/m/static/images/lua-sell.png"/>
        <div>
            <p>纹桃科技LUA娱乐平台</p>
            <p>1、主打金币模式，打造国际高端娱乐平台 2、全新邮件系统，引领精细化运营 3、全民推广，更简单的用户裂变模式</p>
        </div>
        <a href="/m/luayl">查看游戏大厅</a>
    </div>
</div>
    </>
  )
}
