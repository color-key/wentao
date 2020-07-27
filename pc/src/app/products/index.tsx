import React from 'react';
import Header from './header';
import Main from './main';

export default () => {

  React.useEffect(() => {
    seajs.use(['/pc/static/script/view/products/index.js']);
  }, []);

  return (
    <>
      <link rel="stylesheet" href={`/pc/static/style/default/products/index.css`} />
      <Header/>
      <Main/>
    </>
  )
}