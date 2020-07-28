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

  return (
    <>
      <link rel="stylesheet" href={`/pc/static/style/default/news/original.css`} />
      <Banner/>
      <Main/>
    </>
  )
}