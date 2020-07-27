/**
 * Create by fay on 4/22/20 8:33 上午
 */
import Header from './header'
import Footer from './footer'
import React from 'react';

export default ({children}: any) => {

  return (
    <>
      <div className="ui-top-fix" id="top-fix">
        <Header/>
      </div>
      {children}
      <Footer/>
    </>
  )
}