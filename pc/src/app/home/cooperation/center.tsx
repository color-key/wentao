import React from 'react';

export default () => {
  // 合作底部
  return (
    <div className="ui-cooperation-center">
      <div className="ui-work fn-left">
        <h2>家园合作</h2>
        <p>携手纹桃科技 互利共赢 开创新局面</p>
        <div className="ui-cooperation-button fn-clear">
          <a className="ui-cooperation-button-1" href="/pc/operate" title="合作介绍">合作介绍</a>
          <a className="ui-cooperation-button-2" href="/pc/operate" title="合作流程">合作流程</a>
          <a className="ui-cooperation-button-3" href="http://www.foxuc.com" title="演示站点" target="_blank">提交资料</a>
          <a className="ui-cooperation-button-4" href="/pc/operate#case" title="成功案例">成功案例</a>
        </div>
      </div>
      <div className="ui-qrcode fn-left">
        <h2>关注纹桃科技</h2>
        <p>关注官方微博或添加微信公众号，让我们为您提供更多、更优质的服务</p>
        <div>
          <img src="/pc/static/images/qrcode_4.png" width="140px" alt="官方微信" />
          <p>扫描微信二维码</p>
        </div><div>
          <img src="/pc/static/images/qrcode_4.png" width="140px" alt="官方微博" />
          <p>扫描微博二维码</p>
        </div>
      </div>
    </div>
  );
};
