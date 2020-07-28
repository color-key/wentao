import React from 'react';
import {getJson} from '@fay-react/lib/fetch';
import {BASE_URL, PATH_PREFIX} from '@/env';

const pageNum = 1;
const pageSize = 10;

export default () => {

  const [data, setData] = React.useState([]);
  const [page, setPage] = React.useState(pageNum);
  const [pageCount, setPageCount] = React.useState(0);

  React.useEffect(() => {
    getJson({path: BASE_URL+'/blog/findByPage?pageNum='+(page-1)+'&pageSize='+pageSize}).then(res => {
      console.log(res);
      if(res.success){
        setData(res.result);
        setPageCount(Math.ceil(res.count/pageSize));
      }
    })
  }, [page]);

  const handlePrePage = () => {
    page === 1 || setPage(page-1);
  };

  const handleNextPage = () => {
    page === pageCount || setPage(page+1);
  };

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
      <div className="ui-newBtn-box">
        <a onClick={handlePrePage}>上一页</a>
        <a onClick={handleNextPage}>下一页</a>
      </div>
    </>
  )
}