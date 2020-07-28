import React from 'react';
import Banner from './banner';
import Main from './main';

export interface BlogType{
  id: number
  title: string
  keywords: string
  description: string
  thumbnail: string
  content: string
  createTime: string
  updateTime: string
}

export default () => {

  React.useEffect(() => {
    seajs.use(['/pc/static/script/view/news/newsdetails.js']);
  }, []);

  return (
    <>
      <link rel="stylesheet" href={`/pc/static/style/default/news/newsdetails.css`} />
      <Banner/>
      <Main/>
    </>
  )
}