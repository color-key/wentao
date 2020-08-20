import React from 'react';
import Head from 'next/head';
import {PATH_PREFIX} from "@/env";

interface Props {
  Component: any
  pageProps: object
}

export default function MyApp(props: Props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
    // document.body.append(`<script type="text/javascript" src="/m/static/bundles/js.js"></script>`);
    // document.body.append(`<script type="text/javascript" src="/m/static/script/footer.js"></script>`);
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>棋牌开发,棋牌游戏开发,手机棋牌游戏开发,棋牌游戏开发商-湖南省纹桃科技有限公司</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta name="keywords" content="棋牌开发,棋牌游戏开发,棋牌游戏开发商,棋牌游戏程序,手机棋牌游戏开发,棋牌游戏源码,纹桃科技,湖南省纹桃科技有限公司" />
        <meta name="description" content="湖南省纹桃科技有限公司从事棋牌开发,棋牌游戏开发,棋牌游戏开发商,棋牌游戏程序,棋牌游戏源码的职业科技有限公司，力争成为国际知名棋牌开发,棋牌游戏开发公司，向业界提供优质棋牌游戏产品。" />
        <link rel="manifest" href={`${PATH_PREFIX}/manifest.json?v=1`} />
        <link rel="icon" type="image/x-icon" href={`${PATH_PREFIX}/favicon.ico`} />
        <link rel="apple-touch-icon" href={`${PATH_PREFIX}/static/pwa.png`}></link>
        <meta name="viewport" content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no,minimal-ui"/>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="full-screen" content="yes"/>
        <meta name="x5-fullscreen" content="true"/>
        <meta content="telephone=no" name="format-detection" />
        <meta content="email=no" name="format-detection" />
        <script src={`${PATH_PREFIX}/lib/judge-terminal-equipment.js`}/>
        <link href={`${PATH_PREFIX}/static/bundles/css.css`} rel="stylesheet"/>
        <script src={`${PATH_PREFIX}/static/bundles/modernizr.js`}/>
      </Head>
      <Component {...pageProps} />
      
    </React.Fragment>
  );
}

