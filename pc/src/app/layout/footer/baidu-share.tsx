import React from 'react';

export default () => {

  return (
    <div id="baidu-share" className="ui-share">
  <h2 className="fn-clear">分享 <a className="ui-pop-close fn-right"></a></h2>
  <div className="bdsharebuttonbox" data-tag="bdshare">
    <a href="#" className="bds_qzone" data-cmd="qzone" title="分享到QQ空间">
      <p>QQ空间</p>
    </a>
    <a href="#" className="bds_tqq" data-cmd="tqq" title="分享到腾讯微博">
      <p>腾讯微博</p>
    </a>
    <a href="#" className="popup_sqq" data-cmd="sqq" title="分享到QQ 好友">
      <p>QQ 好友</p>
    </a>
    <a href="#" className="bds_tsina" data-cmd="tsina" title="分享到新浪微博">
      <p>新浪微博</p>
    </a>
    <a className="bds_kaixin001" data-cmd="kaixin001" title="分享到开心网">
      <p>开心网</p>
    </a>
    <a href="#" className="bds_tieba" data-cmd="tieba" title="分享到贴吧">
      <div></div>
      <p>贴吧</p>
    </a>
    <a href="#" className="bds_weixin" data-cmd="weixin" title="分享到微信">
      <p>微信</p>
    </a>
    <a href="#" className="bds_renren" data-cmd="renren" title="分享到人人网">
      <p>人人网</p>
    </a>

  </div>
</div>
  )
}