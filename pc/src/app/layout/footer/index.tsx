import React from 'react';
import Service from './service';
import Course from './course';
import Wechat from './wechat';
import ContactUs from './contact-us';
import BaiduShare from './baidu-share';
import Footer from './footer';

export default () => {

  return (
    <>
      <Service/>
      <Course/>
      <div id="dialog-backdrop" className="ui-dialog-backdrop"></div>
      <Wechat/>
      <ContactUs/>
      <BaiduShare/>
      <Footer/>
    </>
  );
};
