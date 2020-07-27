import React from 'react';

export default () => {

  return (
    <>
      <div className="ui-pages-banner ui-pages-news">
        以精为业，以质取胜
      </div>
      <div className="ui-about-menu fn-clear">
        <div className="ui-about-nav fn-clear">
          <div className="ui-about-menu-title fn-left">发展历程</div>
          <ul className="ui-about-menu-list fn-right fn-clear">
            <li>
              <a href="/pc/about">关于我们</a>
            </li>
            <li>
              <a href="/pc/about/culture">企业文化</a>
            </li>
            <li>
              <a href="/pc/about/course" className="ui-about-active">发展历程</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
