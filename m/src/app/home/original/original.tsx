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
      <div className="pagination"></div>
      <div className="caseTitle fn-clean-space">
          <em></em>
          <img src="/m/static/images/case_title.png"/>
          <span>
              纹桃科技原创
          </span>
      </div>
      <div className="ui-companyNews  companyMinHeight">
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
      {/* <div className="ui-newBtn-box">
        <a>上一页</a>
        <a href="/m/static/home/Original/2.html">下一页</a>
      </div> */}
    </>
  )
}