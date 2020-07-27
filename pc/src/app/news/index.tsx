import React from 'react';
import Banner from './banner';
import Header from './header';
import ContactUs from './contact-us';
import Main from './main';

export default () => {

  return (
    <>
      <Banner/>
      <Header/>
      <div className="ui-news-right fn-right">
        <ContactUs/>
        <Main/>
      </div>
    </>
  )
}