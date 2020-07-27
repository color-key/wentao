import React from 'react';

export default () => {
  // 合作顶部
  return (
    <div className="ui-cooperation-top">
      <h2>超过300家成功合作案例</h2>
      <p><a href="/pc/case">{"查看更多>"}</a></p>
      <div id="success-case" className="ui-success-contents">
        <div className="ui-container">
          <div className="ui-success-pic">
            <ul className="fn-clear">
              <li>
                <a href="/pc/case">
                  <div className="ui-img-hover">
                    <img src="/pc/static/images/cooperation/1.png" />
                  </div>
                  <p>吉祥游戏中心</p>
                </a>
              </li>
              <li>
                <a href="/pc/case">
                  <div className="ui-img-hover">
                    <img src="/pc/static/images/cooperation/2.png" />
                  </div>
                  <p>快乐吧游戏中心</p>
                </a>
              </li>
              <li>
                <a href="/pc/case">
                  <div className="ui-img-hover">
                    <img src="/pc/static/images/cooperation/3.png" />
                  </div>
                  <p>金游世界游戏中心</p>
                </a>
              </li>
              <li>
                <a href="/pc/case">
                  <div className="ui-img-hover">
                    <img src="/pc/static/images/cooperation/4.png" />
                  </div>
                  <p>亿酷棋牌世界</p>
                </a>
              </li>
              <li>
                <a href="/pc/case">
                  <div className="ui-img-hover">
                    <img src="/pc/static/images/cooperation/5.png" />
                  </div>
                  <p>盛唐游戏中心</p>
                </a>
              </li>
              <li>
                <a href="/pc/case">
                  <div className="ui-img-hover">
                    <img src="/pc/static/images/cooperation/6.png" />
                  </div>
                  <p>中国游戏中心</p>
                </a>
              </li>
              <li>
                <a href="/pc/case">
                  <div className="ui-img-hover">
                    <img src="/pc/static/images/cooperation/1.png" />
                  </div>
                  <p>吉祥游戏中心</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="ui-case-arrowbox fn-clear">
        <div dangerouslySetInnerHTML={{ __html: '<a data-type="prev" className="ui-left-arrow fn-left ui-slider-prev-btn"><img src="/pc/static/images/arrow-left.png"/></a><a data-type="next" className="ui-right-arrow fn-right ui-slider-next-btn"><img src="/pc/static/images/arrow-right.png"/></a>' }} />
        </div>
      </div>
    </div>
  );
};
