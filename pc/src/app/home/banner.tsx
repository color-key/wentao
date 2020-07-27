import React from 'react';

export default () => {

  return (
    <div className="ui-banner-carousel">
    <a className="ui-banner-prev"></a>
    <a className="ui-banner-next"></a>
    <div id="banner-slide" className="ui-carousel-right">
      <div className="ui-carousel-left">
        <ul className="ui-banner-wrap">
          <li>
            <a href="/pc/product/ry">
              <img src="/pc/static/images/banner/index_banner6.png" alt="" />
            </a>
          </li>
          <li>
            <a href="/pc/about">
              <img src="/pc/static/images/banner/index_banner0.png" alt="" />
            </a>
          </li>
          <li>
            <a href="/pc/product">
              <img src="/pc/static/images/banner/index_banner1.jpg" alt="" />
            </a>
          </li>
          <li>
            <a href="/pc/product/qj">
              <img src="/pc/static/images/banner/index_banner2.png" alt="" />
            </a>
          </li>
          <li>
            <a href="/pc/product/qj/u3d">
              <img src="/pc/static/images/banner/index_banner3.png" alt="" />
            </a>
          </li>
            {/* <li>
            <a href="/pc/static/html/sign/index.html">
              <img src="/pc/static/images/banner/index_banner5.jpg" alt="" />
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  </div>
  );
};
