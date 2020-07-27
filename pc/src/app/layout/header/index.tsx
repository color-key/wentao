import React from 'react';
import {useRouter} from 'next/router';
import clsx from 'clsx';
import {PATH_PREFIX} from '@/env';

export default () => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <header className="ui-nav-panel">
    <div className="ui-nav-center">
      <div className="ui-top-content">
        <div className="ui-logo fn-left">
          <a href="/" title="FOXUC纹桃科技">
            <img src="/pc/static/images/logo.png" alt="棋牌游戏开发商" title="棋牌游戏开发商" />
          </a>
        </div>
        <nav className="ui-nav fn-left">
          <ul>
            <li className="ui-nav-box">
              <a href={PATH_PREFIX} className={clsx("ui-nav-1", {'active': pathname===PATH_PREFIX})}>
                首页
                <p  className={clsx({'active': pathname===PATH_PREFIX})}>HOME</p>
              </a>
            </li>
            <li className="ui-nav-line">
              <img src="/pc/static/images/line.png" />
            </li>
            <li className="ui-nav-box">
              <a href={PATH_PREFIX+ "/product"} className={clsx("ui-nav-2", {'active': pathname===PATH_PREFIX+ "/product"})}>
                产品
                <p className={clsx({'active': pathname===PATH_PREFIX+ "/product"})}>PRODUCT</p>
              </a>
            </li>
            <li className="ui-nav-line">
              <img src="/pc/static/images/line.png" />
            </li>
            <li className="ui-nav-box">
              <a href={PATH_PREFIX+ "/operate"} className={clsx("ui-nav-3", {'active': pathname===PATH_PREFIX+ "/operate"})}>
                家园
                <p className={clsx({'active': pathname===PATH_PREFIX+ "/operate"})}>HOMELAND</p>
              </a>
            </li>
            <li className="ui-nav-line">
              <img src="/pc/static/images/line.png" />
            </li>
            <li className="ui-nav-box">
              <a href={PATH_PREFIX+ "/case"} className={clsx("ui-nav-4", {'active': pathname===PATH_PREFIX+ "/case"})}>
                案例
                <p className={clsx({'active': pathname===PATH_PREFIX+ "/case"})}>CASE</p>
              </a>
            </li>
            <li className="ui-nav-line">
              <img src="/pc/static/images/line.png" />
            </li>
            {/* <li className="ui-nav-box">
              <a href={PATH_PREFIX+ "/news"} className={clsx("ui-nav-5", {'active': pathname===PATH_PREFIX+ "/news"})}>
                资讯
                <p className={clsx({'active': pathname===PATH_PREFIX+ "/news"})}>NEWS</p>
              </a>
            </li> */}
            <li className="ui-nav-line">
              <img src="/pc/static/images/line.png" />
            </li>
            <li className="ui-nav-box">
              <a href={PATH_PREFIX+ "/about"} className={clsx("ui-nav-6", {'active': pathname===PATH_PREFIX+ "/about"})}>
                关于
                <p className={clsx({'active': pathname===PATH_PREFIX+'/about'})}>ABOUT</p>
              </a>
            </li>
            <li className="ui-nav-line">
              <img src="/pc/static/images/line.png" />
            </li>
            <li className="ui-nav-box">
              <a href={PATH_PREFIX+ "/contact"} className={clsx("ui-nav-7", {'active': pathname===PATH_PREFIX+ "/contact"})}>
                联系
                <p className={clsx({'active': pathname===PATH_PREFIX+'/contact'})}>CONTACT</p>
              </a>
            </li>
          </ul>
        </nav>
        <div className="ui-telphone fn-left">
          <div></div>
          <i className="fn-left"></i>
          <span className="fn-left">18711739336</span>
        </div>
      </div>
    </div>
  </header>
  );
};


