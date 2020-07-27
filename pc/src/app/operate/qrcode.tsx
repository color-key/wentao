import React from 'react';

export default () => {

  return (
    <div className="ui-qrcode">
      <div className="ui-qrcode-content fn-clear">
        <div className="ui-public">
          <img src="/pc/static/images/qrcode_4.png" width={118} alt=""/>
          <p>关注公众号</p>
          <p>了解更多“纹桃科技游戏家园”产品信息</p>
        </div>
        <div className="ui-business">
          <img src="/pc/static/images/qrcode_4.png" width={118} alt=""/>
          <p>添加商务微信</p>
          <p>了解更多合作运营细节</p>
        </div>
      </div>
    </div> 
  )
}