import React from 'react';

export default () => {

  React.useEffect(() => {
    let script1 = document.createElement('script');
    script1.type = 'text/javascript';
    script1.src = `/m/static/bundles/js.js`;
    let script2 = document.createElement('script');
    script2.type = 'text/javascript';
    script2.src = `/m/static/script/footer.js`;
    document.getElementById('fay-footer-scripts')!.appendChild(script1);
    document.getElementById('fay-footer-scripts')!.appendChild(script2);
  }, []);

  return (
    <>
      <div className="service">
        <div className="service_title">
            纹桃科技棋牌-专注棋牌开发十五年，我们能为您提供：
        </div>
        <ul>
          <li className="fn-clean-space">
            <em></em>
            <img src="/m/static/images/service_1.png"/>
            <div>
              <p>游戏产品</p>
              <p className="service_list_1">PRODUCTS</p>
            </div>
          </li>
          <li className="fn-clean-space">
              <em></em>
              <img src="/m/static/images/service_2.png"/>
              <div>
                  <p>售后服务</p>
                  <p className="service_list_2">SERVICE</p>
              </div>
          </li>
          <li className="fn-clean-space">
            <em></em>
            <img src="/m/static/images/service_3.png"/>
            <div>
              <p>技术支持</p>
              <p className="service_list_3">TECHNOLOGY</p>
            </div>
          </li>
          <li className="fn-clean-space">
            <em></em>
            <img src="/m/static/images/service_4.png"/>
            <div>
              <p>运营指导</p>
              <p className="service_list_4">OPERATING</p>
            </div>
          </li>
        </ul>
        <div className="service_title">
          <a href="http://qr.ccm.gov.cn/lic/58BD9CBB1C934255A22FF3B36ECC9235" target="_blank">粤网文〔2019〕1102-277号</a>   <a href="http://www.beian.miit.gov.cn/" target="_blank">粤ICP备：11009383号-10</a>
        </div>
      </div>
      <div className="bottom fn-clean-space">
        <em></em>
        <a target="_blank" href="mqqwpa://im/chat?chat_type=wpa&uin=2872536059&version=1&src_type=web&web_src=oicqzone.com"><img src="/m/static/images/bottom_1.png"/></a>
        <a href="tel://18711739336"><img src="/m/static/images/bottom_2.png"/></a>
      </div>
      {/* <script type="text/javascript" src="/m/static/bundles/js.js"></script> */}
      {/* <script type="text/javascript" src="/m/static/script/footer.js"></script> */}
      <div id="fay-footer-scripts" />
    {/* <!-- WPA Button Begin --> */}
    {/* <script type="text/javascript" src="../https_wpa.b.qq.com/cgi/wpa.php%EF%BC%9Fkey=XzkzODAzNjgwOF80OTA3NjJfNDAwMDAwNzA0M18"></script> */}
    {/* <!-- WPA Button End --> */}
    </>
  );
};
