import React from 'react';
import Banner from './banner';
import About from './about';
import GameList from './game-list';
import Intro from './intro';
import News from './news';
import Cooperation from './cooperation';

export default () => {

  React.useEffect(() => {
    seajs.use(['/pc/static/script/view/index/index.js']);
  }, [])

  return (
    <>
      <link rel="stylesheet" href={`/pc/static/style/default/index/index.css`} />
      <Banner/>
      <About/>
      <GameList/>
      <Intro/>
      <News/>
      <Cooperation/>
    </>
  )
}