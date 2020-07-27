import React from 'react';

export default () => {

  React.useEffect(() => {
    seajs.use(['/pc/static/script/view/case/index.js']);
  }, []);

  return (
    <>
      <link rel="stylesheet" href={`/pc/static/style/default/case/index.css`} />
      <div className="ui-pages-banner ui-pages-news">
        携手发展，互利共赢
      </div>
      <div className="ui-pages ui-container">
          <div className="ui-pages-header fn-clear">
              <div className="ui-file">成功案例</div>
          </div>
          <div className="ui-case-content fn-clear">
          <div className="ui-case-content-left">
            <ul className="ui-showcase">
                <li className="fn-clear">
                    <div className="ui-caseimg-box ui-img-hover fn-left">
                      <img src="/pc/static/images/case/case_qqgame.png"/>
                    </div>
                    <section className="ui-case-intro fn-right">
                      <h2>QQ 游戏</h2>
                      <p>腾讯——目前中国知名互联网综合服务提供商，也是中国服务用户较多的互联网企业之一。2009 年，腾讯 QQGame 正式委托纹桃科技为其棋牌游戏的重要外包开发商。同年七月，纹桃科技研发的二七王、手把一、黑尖等游戏测试通过，正式上线。</p>
                    </section>
                </li>
                <li className="fn-clear">
                      <div className="ui-caseimg-box ui-img-hover fn-left">
                        <img src="/pc/static/images/case/case_zhongyou1.png"/>
                      </div>
                      <section className="ui-case-intro fn-right">
                        <h2>中国游戏中心</h2>
                        <p>中游——中国游戏中心是集文化、游戏、休闲、竞技、商务为一体的大型休闲文化社区，是中国国内乃至全球华人知名的游戏网站。2009 年，纹桃科技与中国游戏中心达成战略合作关系，共同研发了武汉麻将、二人麻将、升级等数十款游戏。</p>
                      </section>
                  </li> 
                  <li className="fn-clear">
                    <div className="ui-caseimg-box ui-img-hover fn-left">
                      <img src="/pc/static/images/case/case_jixiang.png"/>
                    </div>
                    <section className="ui-case-intro fn-right">
                      <h2>吉祥游戏</h2>
                      <p>吉林省鑫泽网络技术有限公司，注册资金 1000 万元，于 2009 年 11 月与纹桃科技达成战略合作关系，进入棋牌游戏开发运营领域。经过一年多的发展，所运营的吉祥游戏中心在线人数突破万人，以骄人的在线用户量，证实了棋牌游戏平台的稳定性，以及鑫泽网络团队积极探索玩家需求、贴近满足真实棋牌的游戏运营精神。</p>
                    </section>
                </li>
                <li className="fn-clear">
                      <div className="ui-caseimg-box ui-img-hover fn-left">
                        <img src="/pc/static/images/case/case_yiku.png"/>
                      </div>
                      <section className="ui-case-intro fn-right">
                        <h2>亿酷棋牌世界</h2>
                        <p>丹东巨合网络科技有限责任公司，随着 2007 年 3 月游戏平台的上线，正式注册成立。目前，旗下拥有一支从事自主开发、运营的技术团队，并已成功在纹桃科技平台代码的基础上自主开发辽宁地区本地游戏。成为东北棋牌游戏界强大的生力军。</p>
                      </section>
                  </li>
                  <li className="fn-clear">
                          <div className="ui-caseimg-box ui-img-hover fn-left">
                            <img src="/pc/static/images/case/case_jinyou.png"/>
                          </div>
                          <section className="ui-case-intro fn-right">
                            <h2>金游世界</h2>
                            <p>苏州金游数码科技有限公司于 2003 年 3 月正式成立，2008 年引入纹桃科技游戏平台，基于纹桃科技平台的基础上进行自主二次研发，目前平台人数高达三四万，成为江苏省人气超高、家喻户晓的网络棋牌游戏平台。</p>
                          </section>
                  </li>
                  <li className="fn-clear">
                          <div className="ui-caseimg-box ui-img-hover fn-left">
                            <img src="/pc/static/images/case/case_cixi.png"/>
                          </div>
                          <section className="ui-case-intro fn-right">
                            <h2>慈溪游戏中心</h2>
                            <p>慈溪中兴网络信息广告有限公司是 2003 年重组注册成立的一家专门提供计算机相关服务、计算机网络设计安装、网络生活资讯、企业上网解决方案等技术和信息服务的股份制有限公司，总部设在浙江省慈溪市，旗下拥有慈溪网 www.zxip.com——慈溪地区综合性网络门户平台，并且还具备户外广告、印刷广告发布、电视广告代理、视频点播、宽带安装、信息咨询、软件设计、计算机销售维修等多项业务。慈溪游戏中心已成为慈溪地级市玩家常驻人数较多的游戏平台。</p>
                          </section>
                  </li>
                  <li className="fn-clear">
                          <div className="ui-caseimg-box ui-img-hover fn-left">
                            <img src="/pc/static/images/case/case_pk.png"/>
                          </div>
                          <section className="ui-case-intro fn-right">
                            <h2>一起 PK 棋牌游戏</h2>
                            <p>一起 PK 视频棋牌游戏， 2009 年与纹桃科技达成合作关系，在纹桃科技研发的 6602 棋牌平台框架基础上，再次自主创新，打造国内首款集视频、游戏、聊天于一体的网络休闲棋牌游戏平台！至今该平台以分站联合运营方式，多款地方特色棋牌游戏达到了平均 3000 人同时在线成绩，成为浙江周边地区的知名棋牌游戏平台。</p>
                          </section>
                  </li>
                  <li className="fn-clear">
                          <div className="ui-caseimg-box ui-img-hover fn-left">
                            <img src="/pc/static/images/case/case_kuaileba.png"/>
                          </div>
                          <section className="ui-case-intro fn-right">
                            <h2>快乐吧游戏中心</h2>
                            <p>吉林省智联网络科技有限责任公司，公司注册地及办公地点位于吉林长春市，由多位在 IT 行业内具有多年企业运作经验的资深人士创办和管理。2009 年与纹桃科技签定合作协议，2010 年正式上线，现已拥有自己的开发和运营团队，同时在线人数也达到九千人，已成为吉林省规模较大的网络游戏平台。</p>
                          </section>
                  </li>
                  <li className="fn-clear">
                          <div className="ui-caseimg-box ui-img-hover fn-left">
                            <img src="/pc/static/images/case/case_shengtang.png"/>
                          </div>
                          <section className="ui-case-intro fn-right">
                            <h2>盛唐游戏中心</h2>
                            <p>陕西盛唐在线网络信息有限公司成立于 2004 年 7 月，注册资金人民币 1000 万元，公司专门从事网络游戏行业，业务涵盖大型网游、网络棋牌、休闲游戏、Flash 游戏、单机游戏等游戏产品和服务。2006 年购买纹桃科技平台，目前已成立各地区分站，平台在线人数与日俱增。</p>
                          </section>
                  </li>
                  <li className="fn-clear">
                          <div className="ui-caseimg-box ui-img-hover fn-left">
                            <img src="/pc/static/images/case/case_chouzhou.png"/>
                          </div>
                          <section className="ui-case-intro fn-right">
                            <h2>稠州游戏中心</h2>
                            <p>东方热线——华东地区知名网站，浙江省知名综合性网站，宁波的门户站点。内容涵盖论坛、影院、快讯、游戏、图库、房产、时尚、娱乐、博客、生活、汽车、教育、人才、热点、旅游。在转型为纹桃科技平台后，短短一年之内，平台在线人数高达四千人同时在线。</p>
                          </section>
                  </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="ui-question">
        <p>想了解更多平台?纹桃科技专业产品顾问为您提供<a href="http://wpa.qq.com/msgrd?v=3&uin=2872536059&site=qq&menu=yes" target="_blank">在线咨询</a></p> 
      </div>
    </>
  )
}