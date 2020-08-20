import React from 'react';

export default () => {

  return (
    <>
    <div className="game_list_title fn-clean-space">
    <em></em>
    <img src="/m/static/images/list_title_img.png"/>
    <span>关于纹桃科技</span>
    <a href="/m/about">显示全部 &gt;</a>
</div>
<div className="ui-companyIntro">
  湖南省纹桃科技有限公司（简称纹桃科技）是一家专注于PC、手机棋牌游戏开发的科技有限公司......
</div>
<div className="game_list_title fn-clean-space">
    <em></em>
    <img src="/m/static/images/list_title_img.png"/>
    <span>公司新闻</span>
    <a href="/m/news">显示全部 &gt;</a>
</div>
<div className="ui-companyNews">
    <ul>
                    <li>
                        <a href="/m/static/home/Info/13101.html">海外联运、本土化定制，纹桃科技全新业务模式招募全球合伙人</a>
                            <img src="/m/static/images/new.png"/>
                        <span className="fn-right">2020-06-05</span>
                    </li>
                    <li>
                        <a href="/m/static/home/Info/12960.html">纹桃科技卓越Creator平台全新上市：做市场认可的创新型棋牌</a>
                        <span className="fn-right">2020-01-09</span>
                    </li>
                    <li>
                        <a href="/m/static/home/Info/13103.html">一年一款精品捕鱼，纹桃科技《海王》捕鱼全新上市</a>
                        <span className="fn-right">2020-06-10</span>
                    </li>
                    <li>
                        <a href="/m/static/home/Info/10709.html">《纹桃科技旗舰平台》重磅推出：玩转竞技娱乐，领航棋牌社交</a>
                        <span className="fn-right">2019-10-17</span>
                    </li>
                    <li>
                        {/* <a href="/m/static/home/Info/12978.html">纹桃科技IOS超级签名系统正式发售：全新苹果解决方案</a> */}
                        <a>纹桃科技IOS超级签名系统正式发售：全新苹果解决方案</a>
                        <span className="fn-right">2019-09-23</span>
                    </li>

    </ul>
</div>
    </>
  )
}