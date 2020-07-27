import React from 'react';

export default () => {

  return (
    <div className="ui-pages ui-container">
      <div className="ui-pages-content">
        <div className="ui-product-1" id="qjapp">
          <div className="ui-content-box">
            <div className="ui-flagship-show fn-left">
              <img src="/pc/static/images/products/flagship_u3d_show.jpg" alt="网狐旗舰U3D版" title=""/>
            </div>
            <div className="ui-detail-1 fn-right">
              <img src="/pc/static/images/products/flagship_u3d.png" alt="" title=""/>
              <p>3D 立体画面，特效全新升级。网狐旗舰 U3D 版，引领技术潮流，震撼你的眼球。</p>
              <div>
                <a href="../product-detail/qj/game-u3d.html" className="ui-bbtn fn-left"></a><a href="https://wpa.b.qq.com/cgi/wpa.php?ln=1&amp;key=XzkzODAzNjgwOF80OTA1NDNfNDAwMDAwNzA0M18yXw" target="_blank" className="ui-ybtn fn-right" rel="nofollow"></a>
              </div>
            </div>
          </div>
        </div>
        <div className="ui-product-2">
          <div className="ui-content-box2" id="qjh5">
            <div className="ui-detail-2 fn-left">
              <img src="/pc/static/images/products/flagship_app.png" alt="" title=""/>
              <p>网狐旗舰app版。精美画面，打造国内高端游戏平台。</p>
              <div>
                <a href="/product/ry" className="ui-bbtn fn-left"></a><a href="https://wpa.b.qq.com/cgi/wpa.php?ln=1&amp;key=XzkzODAzNjgwOF80OTA1NDNfNDAwMDAwNzA0M18yXw" target="_blank" className="ui-ybtn fn-right" rel="nofollow"></a>
              </div>
            </div>
            <div className="ui-h5-show fn-right">
              <img src="/pc/static/images/products/flagship_app_show.jpg" alt="网狐旗舰APP版" title=""/>
            </div>
          </div>
        </div>
        <div id="game-list" data-url="/Ashx/ProService.ashx?action=getGameList" className="ui-gamelist">
          <div className="ui-gamelist-box">
          <h2>游戏列表</h2>
          <div className="ui-game-platform">
            <a data-name="type" data-value="1" href="javascript:;" className="active ui-game-7001">
            </a>
            <div className="ui-line"/>
            <a data-name="type" data-value="2" href="javascript:;" className="ui-game-6603">
            </a>
          </div>
            <ul className="ui-games fn-clear">          
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}