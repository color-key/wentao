import React from 'react';
import Swiper from '../swiper';
import GameList1 from './game-list_1';
import GameList2 from './game-list_2';
import GameList3 from './game-list_3';

export default () => {

  return (
    <div>
      <Swiper/>
      <GameList1/>
      <GameList2/>
      <GameList3/>
    </div>
  )
}