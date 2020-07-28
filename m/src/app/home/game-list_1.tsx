import React from 'react';
import {getJson} from '@fay-react/lib/fetch';
import {BASE_URL, PATH_PREFIX} from '@/env';

export default () => {

  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    getJson({path: BASE_URL+'/blog/findByPage?pageNum='+0+'&pageSize='+1}).then(res => {
      console.log(res);
      if(res.success){
        setData(res.result);
      }
    })
  }, []);

  return (
    <>
      <div className="game_list_title fn-clean-space">
        <em></em>
        <img src="/m/static/images/list_title_img.png"/>
        <span>纹桃科技原创</span>
        <a href="/m/original">显示全部 &gt;</a>
      </div>
      <div className="ui-foxArticle">
        <ul>
          {
            data.map((blog: any) => {
              const newsDetailPath = PATH_PREFIX+"/news/newsdetails/"+blog.id; 
              return (
                <li key={blog.id}>
                  <a href={newsDetailPath}>{blog.title}</a>
                    <img src="/m/static/images/new.png"/>
                  <span className="fn-right">{blog.createTime}</span>
                </li>
              )
            })
          }
        </ul>
      </div>
    </>
  )
}