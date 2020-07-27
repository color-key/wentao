import React from 'react';

export default () => {

  return (
    <div id="contact-us" className="ui-tel">
    <h2 className="fn-clear">官方热线 <a className="ui-pop-close fn-right"></a></h2>
    <p>服务热线</p>
    {/* <img src="/pc/static/images/contact.png"> */}
    <p style={{fontSize: '30px', marginTop: '20px',marginBottom: '20px'}}>18711739336</p>
    <p className="ui-line"></p>
    <p className="ui-qq">企业QQ</p>
    <a id="insideQQ-fay" href="http://wpa.qq.com/msgrd?v=3&uin=2872536059&site=qq&menu=yes" className="ui-main-qq"></a>
    <p className="ui-line"></p>
    <p className="ui-service-text">客服热线</p>
    {/* <img src="/pc/static/images/UCmail.png"> */}
    <p style={{fontSize: '30px', marginTop: '20px',marginBottom: '20px'}}>2872536059@qq.com</p>
  </div>
  )
}