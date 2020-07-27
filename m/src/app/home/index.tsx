import React from 'react';
import Swiper from './swiper';
import Main from './main';
// import News from './home-news';
// import GameList1 from './game-list_1';
import GameList2 from './game-list_2';

export default () => {

  return (
    <div>
      <Swiper/>
      <Main/>
      {/* <News/> */}
      {/* <GameList1/> */}
      <GameList2/>
    </div>
  )
}