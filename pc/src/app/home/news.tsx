import React from 'react';
import {getJson} from '@fay-react/lib/fetch';
import {BASE_URL, PATH_PREFIX} from '@/env';
import {BlogType} from '../news';

export default () => {

  const [data, setData] = React.useState<BlogType[]>([]);

  React.useEffect(() => {
    getJson({path: BASE_URL+'/blog/findByPage?pageNum='+0+'&pageSize='+1}).then(res => {
      console.log(res);
      if(res.success){
        setData(res.result);
      }
    })
  }, []);

  return (
    <div className="ui-news">
    <div className="ui-news-content">
      <div className="ui-news-list fn-left">
        <h2>
          棋牌资讯
          <a href="/news">{"查看更多 >"}</a>
        </h2>
        <ul className="ui-newslist">
          {
            data.map((blog) => {
              const newsDetailPath = PATH_PREFIX+"/news/newsdetails/"+blog.id; 
              return (
                <li>
                  <a href={newsDetailPath}>{blog.title}</a><span>{blog.createTime}</span>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  </div>
  )
}