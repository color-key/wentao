import React from 'react';

export default () => {
  // 公司介绍
  return (
    <div className="ui-introduce">
      <div className="ui-introduce-content">
        <h2>
          为什么选择纹桃科技成为<span>棋牌游戏开发商？</span>
        </h2>
        <ul>
          <li className="ui-intro-1">
            <a href="/pc/about">
              <img src="/pc/static/images/intro_01.jpg" alt="十四年棋牌游戏开发经验" />
            </a>
          </li>
          <li className="ui-intro-2">
            <a href="/pc/products">
              <img src="/pc/static/images/intro_02.png" alt="领先的研发技术和全面的产品体系" />
            </a>
          </li>
          <li className="ui-intro-3">
            <a href="/pc/case">
              <img src="/pc/static/images/intro_03.png" alt="超三百家成功合作案例" />
            </a>
          </li>
          <li className="ui-intro-4">
            <a href="/pc/contact">
              <img src="/pc/static/images/intro_04.png" alt="全方位售后服务体系" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}