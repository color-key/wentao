import React from 'react';
import Info from './info';
import Choose from './choose';
import Cooperation from './cooperation';
import Case from './case';
import Qrcode from './qrcode';

export default () => {

  return (
    <>
      <link rel="stylesheet" href={`/pc/static/style/default/operate/index.css`} />
      <Info/>
      <Choose/>
      <Cooperation/>
      <Case/>
      <Qrcode/>
    </>
  )
}