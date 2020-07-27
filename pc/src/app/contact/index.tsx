import React from 'react';

export default () => {

  React.useEffect(() => {
    seajs.use(['/pc/static/script/view/contact/index.js']);
  }, []);

  return (
    <>
      <link rel="stylesheet" href={`/pc/static/style/default/contact/index.css`} />
      <div className="ui-pages-banner ui-pages-news">
        仔细聆听，为您服务
      </div>
      <div className="ui-connect">
        <h2>专业棋牌顾问 <span>随时恭候 ！</span></h2>
        <ul className="ui-connect-list">
          <li>
            <div className="ui-conlist-title1">张小姐</div>
            <div className="ui-conlist-content">
              <div className="ui-conlist-list">
                <div><i className="ui-conlist-1"></i>联系电话</div>
                18711739336
              </div>
              <div className="ui-conlist-list">
                <div><i className="ui-conlist-2"></i>手机/微信</div>
                18711739336
              </div>
              <div className="ui-conlist-list">
                <div><i className="ui-conlist-3"></i>QQ联系</div>
                <a
                  rel="nofollow"
                  href="tencent://message/?uin=2872536059&amp;Site=http://www.wtqp666.com/&amp;Menu=yes"
                  target="_blank"
                  >2872536059</a
                >
              </div>
              <div className="ui-conlist-list">
                <div><i className="ui-conlist-4"></i>E-mail</div>
                <a href="mailto:2872536059@qq.com">2872536059@qq.com</a>
              </div>
            </div>
          </li>
          <li>
            <div className="ui-conlist-title2">刘小姐</div>
            <div className="ui-conlist-content">
              <div className="ui-conlist-list">
                <div><i className="ui-conlist-1"></i>联系电话</div>
                18711739336
              </div>
              <div className="ui-conlist-list">
                <div><i className="ui-conlist-2"></i>手机/微信</div>
                18711739336
              </div>
              <div className="ui-conlist-list">
                <div><i className="ui-conlist-3"></i>QQ联系</div>
                <a
                  rel="nofollow"
                  href="tencent://message/?uin=2872536059&amp;Site=http://www.wtqp666.com/&amp;Menu=yes"
                  target="_blank"
                  >2872536059</a
                >
              </div>
              <div className="ui-conlist-list">
                <div><i className="ui-conlist-4"></i>E-mail</div>
                <a >2872536059@qq.com</a>
              </div>
            </div>
          </li>
          <li>
            <div className="ui-conlist-title1">南小姐</div>
            <div className="ui-conlist-content">
              <div className="ui-conlist-list">
                <div><i className="ui-conlist-1"></i>联系电话</div>
                18711739336
              </div>
              <div className="ui-conlist-list">
                <div><i className="ui-conlist-2"></i>手机/微信</div>
                18711739336
              </div>
              <div className="ui-conlist-list">
                <div><i className="ui-conlist-3"></i>QQ联系</div>
                <a
                  rel="nofollow"
                  href="tencent://message/?uin=2872536059&amp;Site=http://www.wtqp666.com/&amp;Menu=yes"
                  target="_blank"
                  >2872536059</a
                >
              </div>
              <div className="ui-conlist-list">
                <div><i className="ui-conlist-4"></i>E-mail</div>
                <a href="mailto:2872536059@qq.com">2872536059@qq.com</a>
              </div>
            </div>
          </li>
          <li>
            <div className="ui-conlist-title2">周小姐</div>
            <div className="ui-conlist-content">
              <div className="ui-conlist-list">
                <div><i className="ui-conlist-1"></i>联系电话</div>
                18711739336
              </div>
              <div className="ui-conlist-list">
                <div><i className="ui-conlist-2"></i>手机/微信</div>
                18711739336
              </div>
              <div className="ui-conlist-list">
                <div><i className="ui-conlist-3"></i>QQ联系</div>
                <a
                  rel="nofollow"
                  href="tencent://message/?uin=2872536059&amp;Site=http://www.wtqp666.com/&amp;Menu=yes"
                  target="_blank"
                  >2872536059</a
                >
              </div>
              <div className="ui-conlist-list">
                <div><i className="ui-conlist-4"></i>E-mail</div>
                <a href="mailto:Daria@wtqp666.com">2872536059@qq.com</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="ui-pages ui-container">
        <div className="ui-pages-content">
          <div className="ui-company fn-clear" id="ui-address·">
            <div className="ui-left">
              <h2>公司地址</h2>
              <p>湖南省长沙市雨花区嘉熙国际</p>
              {/* <section>
                <div className="ui-baidu-map fn-clean-spcae">
                  <a rel="nofollow" href="https://j.map.baidu.com/D3MZO" target="_blank"
                    ><img src="/pc/static/images/baidu-map.png"
                  /></a>
                  <p>
                    <span>在百度地图中</span>
                    <a rel="nofollow" href="https://j.map.baidu.com/D3MZO" target="_blank"
                      >查看我司地址 <img src="/pc/static/images/link.png"
                    /></a>
                  </p>
                  <em></em>
                </div>
              </section> */}
              {/* <section>
                <div className="ui-baidu-map fn-clean-spcae">
                  <a rel="nofollow" href="http://f.amap.com/1q7zr_04C4muq" target="_blank"
                    ><img src="/pc/static/images/gaode-map.png"
                  /></a>
                  <p>
                    <span>在高德地图中</span>
                    <a rel="nofollow" href="http://f.amap.com/1q7zr_04C4muq" target="_blank"
                      >查看我司地址 <img src="/pc/static/images/link.png"
                    /></a>
                  </p>
                  <em></em>
                </div>
              </section> */}
            </div>
            <div className="ui-right">
              <h2>服务热线</h2>
              <p>欢迎您通过热线电话或 QQ 客服进行咨询</p>
              <div className="ui-contact-detail">
                <p title="18711739336">18711739336</p>

                <p className="ui-qq-frame">
                  <a rel="nofollow" href="http://wpa.qq.com/msgrd?v=3&uin=2872536059&site=qq&menu=yes" target="_blank" className="ui-main-qq"></a>
                </p>
              </div>
            </div>
          </div>
          {/* <div className="ui-foxuc-map" id="ui-map">
            <div className="ui-piece-title2">
              <h2>地图导航</h2>
              <p>在地图中获取到达纹桃科技的最佳路线</p>
            </div>
            <ul className="ui-foxuc-map-bar fn-clear">
              <li className="ui-foxuc-map-bar1"><a className="ui-map-active">概览</a></li>
              <li className="ui-foxuc-map-bar2"><a >从机场来 </a></li>
              <li className="ui-foxuc-map-bar3"><a >从火车站来</a></li>
              <li className="ui-foxuc-map-bar4"><a >乘地铁来</a></li>
              <li className="ui-foxuc-map-bar5"><a >坐公交来</a></li>
              <li className="ui-foxuc-map-bar6"><a >周边吃住</a></li>
            </ul>
            <div className="ui-foxuc-map-bg">
              <div className="ui-mapimg-active"><img src="/pc/static/images/map_01.png" /></div>
              <div className="ui-mapimg-off"><img src="/pc/static/images/map_02.png" /></div>
              <div className="ui-mapimg-off"><img src="/pc/static/images/map_03.png" /></div>
              <div className="ui-mapimg-off"><img src="/pc/static/images/map_04.png" /></div>
              <div className="ui-mapimg-off"><img src="/pc/static/images/map_05.png" /></div>
              <div className="ui-mapimg-off"><img src="/pc/static/images/map_06.png" /></div>
            </div>
          </div> */}
        </div>
      </div>
      <span id="feedback" className="ui-feedback">
        <h2 className="fn-clear">信息反馈<a className="ui-pop-close fn-right"></a></h2>
        <form className="ui-feedback-form">
          <h3>我要反馈</h3>
          <input type="text" placeholder="请简要概括您要反馈的主题（反馈的主题无意义将被忽略）" />
          <h3>反馈内容</h3>
          <textarea name="" id="" cols={30} rows={10} placeholder="请详细介绍您要反馈的内容"></textarea>
          <h3>联系方式</h3>
          <input type="text" placeholder="请输入手机号码、微信、QQ或邮箱，以便我们及时与您联系" />
          <p><input type="submit" value="提 交" /><input type="button" value="取 消" /></p>
        </form>
      </span>
    </>
  )
}