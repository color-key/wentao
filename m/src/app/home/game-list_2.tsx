import React from 'react';

export default () => {

  return (
    <>
    <div className="game_list_title fn-clean-space">
      <em></em>
      <img src="/m/static/images/list_title_img.png"/>
      <span>游戏推荐</span>
      <a href="/m/game">显示全部 &gt;</a>
    </div>
    <div className="gamelist">
        <ul>
                <li>
                    <a className="qq-link" href="mqqwpa://im/chat?chat_type=wpa&uin=2872536059&version=1&src_type=web&web_src=oicqzone.com">
                        <img src="/m/static/images/gamelist/icon/9.png"/>
                        <p className="gamename">斗地主</p>
                        <p>手机游戏</p>
                    </a>
                </li>
                <li>
                    <a className="qq-link" href="mqqwpa://im/chat?chat_type=wpa&uin=2872536059&version=1&src_type=web&web_src=oicqzone.com">
                        <img src="/m/static/images/gamelist/icon/7.png"/>
                        <p className="gamename">抚州麻将</p>
                        <p>手机游戏</p>
                    </a>
                </li>
                <li>
                    <a className="qq-link" href="mqqwpa://im/chat?chat_type=wpa&uin=2872536059&version=1&src_type=web&web_src=oicqzone.com">
                        <img src="/m/static/images/gamelist/icon/2.png"/>
                        <p className="gamename">红中麻将</p>
                        <p>手机游戏</p>
                    </a>
                </li>
                <li>
                    <a className="qq-link" href="mqqwpa://im/chat?chat_type=wpa&uin=2872536059&version=1&src_type=web&web_src=oicqzone.com">
                        <img src="/m/static/images/gamelist/icon/16.png"/>
                        <p className="gamename">李逵劈鱼</p>
                        <p>手机游戏</p>
                    </a>
                </li>
        </ul>
    </div>
    </>
  )
}