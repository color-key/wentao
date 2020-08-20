import React from 'react';
import {PATH_PREFIX} from "@/env";

export default () => {

  return (
    <footer>
      <div className="ui-footer">
        <div className="ui-footer-top">
          <a href="/pc/static/images/about/HighTechCo.jpg" target="_blank">高新技术企业认定证书</a>|<a href="/pc/static/images/about/certificate.jpg" target="_blank">计算机软件著作权登记证书</a>|<a href="/pc/static/images/about/certificate_soft.jpg" target="_blank">软件企业认定证书</a>|<a href="/pc/static/images/about/bookin.jpg" target="_blank">软件产品登记证书</a>|<a href="/pc/static/images/about/license.jpg" target="_blank">企业法人营业执照</a>|<a href="/pc/static/images/about/sz.jpg" target="_blank">守合同重信用企业</a>|<a rel="nofollow" href="http://www.beian.miit.gov.cn" target="_blank">湘ICP备20014801号</a>
        </div>
        <div className="ui-footer-content">      
          <p className="ui-ft-1">棋牌游戏开发，棋牌游戏出售，棋牌游戏平台---纹桃科技专业提供!</p>
          <p className="ui-ft-2">版权所有：湖南省纹桃科技公司 &nbsp;&nbsp;湘ICP备20014801号</p>
          <p className="ui-ft-3">
            公司地址：湖南省长沙市雨花区嘉熙国际 &nbsp;&nbsp;商务热线：
            <i>18711739336</i>
            &nbsp;&nbsp;&nbsp;电子邮箱: 
            <a href="mailto:2872536059@qq.com">2872536059@qq.com</a>
          </p>
          {/* <div className="ui-ft-4">
            <a rel="nofollow" href="http://www.szga.gov.cn/" target="_blank">
              <img src="/pc/static/images/safety_1.png"  alt="" title=""/>
            </a>
            <a rel="nofollow" href="http://www.szga.gov.cn/" target="_blank">
              <img src="/pc/static/images/safety_2.png"  alt="" title=""/>
            </a>
            <a href="/pc/static/images/about/about_icp07.jpg" target="_blank">
              <img src="/pc/static/images/safety_3.png"  alt="" title=""/>
            </a>
            <a rel="nofollow" href="http://www.szwljb.gov.cn/" target="_blank">
              <img src="/pc/static/images/safety_4.png"  alt="" title=""/>
            </a>
            <a href="/pc/static/images/about/about_icp03.jpeg" target="_blank">
              <img src="/pc/static/images/safety_5.png"  alt="" title=""/>
            </a>
          </div> */}
          <div className="ui-ft-5">
            {/* <script src={`${PATH_PREFIX}/static/script/footer.js`}/> */}
            {/* <!--互联网文化经营单位--> */}
            <a rel="nofollow" href="http://sq.ccm.gov.cn:80/ccnt/sczr/service/business/emark/toDetail/58BD9CBB1C934255A22FF3B36ECC9235" target="_blank">
              <img src={`${PATH_PREFIX}/static/images/footer/wenhuajingying.png`} width="68" height="68" />
            </a>
            {/* <!--工商网监电子标识--> */}
            {/* <script id="ebsgovicon" src="https://szcert.ebs.org.cn/govicon.js?id=752d01a1-77ec-43a4-bc6c-a6510a497787&width=50&height=68&type=1" type="text/javascript"></script> */}
          </div>
        </div>
      </div>
    </footer>
  )
}