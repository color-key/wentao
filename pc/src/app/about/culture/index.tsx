import React from 'react';
import Banner from './banner';
import Main from './main';

export default () => {

  React.useEffect(() => {
    seajs.use(['/pc/static/script/view/about/culture.js']);
  }, []);

  return (
    <>
      <link rel="stylesheet" href={`/pc/static/style/default/about/culture.css`} />
      <Banner/>
      <Main/>
    </>
  )
}