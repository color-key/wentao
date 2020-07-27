import React from 'react';

export default () => {

  return (
    <>
      <div className="game_list_title fn-clean-space">
    <em></em>
    <img src="/m/static/images/location.png"/>
    <span>公司地址/路线</span>
</div>
<div className="location">
    <div className="location_top">
        <p><span>公司地址：</span>湖南省长沙市雨花区嘉熙国际</p>
        <p><span>联系电话：</span>18711739336</p>
        <p><span>电子邮箱：</span>2872536059@qq.com</p>
    </div>
    <div className="loacation_line">
        <img src="/m/static/images/location_line.png"/>
    </div>
    <div className="location_bottom">
        <p><span>靠近公司的车站：</span>高桥站（地铁五号线）</p>
        {/* <p>
            <span>途经车次：</span>后海站（地铁蛇口线）、121、229、B605、B700、B794、J1、M209、M222、M239、M299、322、337、353、362、382、58、72、76、80、K105、K204、M347、M370
        </p> */}
        <a className="location_btn"></a>
    </div>
    <div id="ui-baidu-map"></div>
</div>
<script src="/m/static/js/baidumap.js"></script>
    </>
  )
}