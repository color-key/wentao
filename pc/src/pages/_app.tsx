import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import {PATH_PREFIX} from "@/env";
// import '../styles/global.css';

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>棋牌开发,棋牌游戏开发,手机棋牌游戏开发,棋牌游戏开发商-湖南纹桃科技公司</title>
        <meta name="keywords" content="棋牌开发,棋牌游戏开发,棋牌游戏开发商,棋牌游戏程序,手机棋牌游戏开发,棋牌游戏源码,纹桃科技,湖南纹桃科技公司" />
        <meta name="description" content="湖南纹桃科技公司从事棋牌开发,棋牌游戏开发,棋牌游戏开发商,棋牌游戏程序,棋牌游戏源码的职业科技公司，力争成为国际知名棋牌开发,棋牌游戏开发公司，向业界提供优质棋牌游戏产品。" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
        <meta name="renderer" content="webkit"/>
        <link rel="manifest" href={`${PATH_PREFIX}/manifest.json`} />
        <link rel="icon" type="image/x-icon" href={`${PATH_PREFIX}/favicon.ico`} />
        <meta name="viewport" content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no,minimal-ui"/>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="full-screen" content="yes"/>
        <meta name="x5-fullscreen" content="true"/>
        <meta content="telephone=no" name="format-detection" />
        <meta content="email=no" name="format-detection" />
        <script src={`${PATH_PREFIX}/lib/judge-terminal-equipment.js`}/>
        <script src={`${PATH_PREFIX}/static/script/header.js`}/>
        <link rel="stylesheet" href={`${PATH_PREFIX}/static/style/default/common.css`} />
        <script id="seajsnode" src={`${PATH_PREFIX}/static/script/seajs/3.0.1/sea.js`}></script>
        <script>seajs.use([`/pc/static/script/view/common.js`]);</script>
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=UA-132442101-1"></script> */}
        <link rel="stylesheet" href={`${PATH_PREFIX}/static/style/default/header.css`} />
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
}

