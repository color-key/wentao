import React from 'react';
import {useRouter} from 'next/router';
import clsx from 'clsx';

export default () => {
  const router = useRouter();
  const pathname = router.pathname;
  const data = [{
    activeImg: '/m/static/images/nav_1_active.png',
    img: '/m/static/images/nav_1.png',
    primary: '首页',
    secondary: 'HOME',
    path: '/m'
  },{
    activeImg: '/m/static/images/nav_2_active.png',
    img: '/m/static/images/nav_2.png',
    primary: '游戏出售',
    secondary: 'GAME SELL',
    path: '/m/game'
  },{
    activeImg: '/m/static/images/nav_3_active.png',
    img: '/m/static/images/nav_3.png',
    primary: '成功案例',
    secondary: 'SUCCESS CASES',
    path: '/m/example'
  },{
    activeImg: '/m/static/images/nav_4_active.png',
    img: '/m/static/images/nav_4.png',
    primary: '联系我们',
    secondary: 'CONTACT US',
    path: '/m/contact'
  }]
  return (
    <>
      <header><img src="/m/static/images/top.jpg"/></header>
      <nav>
        <ul>
          {
            data.map((item, index) => {
              const current = item.path === pathname;
              return (
                <li key={index} className={clsx({"current": current}, "fn-clean-space")}>
                  <a href={item.path}>
                    {index > 0 && <i></i>}
                    <em></em>
                    <span><img src={current?item.activeImg:item.img}/></span>
                    <div className="title">
                      <h2>{item.primary}</h2>
                      <p>{item.secondary}</p>
                    </div>
                  </a>
                </li>
              )
            })
          }
        </ul>
      </nav>
    </>
  );
};


