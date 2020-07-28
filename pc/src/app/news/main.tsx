import React from 'react';
import {getJson} from '@fay-react/lib/fetch';
import {BASE_URL, PATH_PREFIX} from '@/env';
import {BlogType} from '.';

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
    <div className="ui-main">
      <div className="ui-main-content fn-clear">
        <div className="ui-news-left fn-left">
          <div>
            {
              data.map((blog) => {
                const newsDetailPath = PATH_PREFIX+"/news/newsdetails/"+blog.id;
                return (
                  <section key={blog.id} className="fn-clear" data-newsid="">
                    <a href={newsDetailPath}>
                      <div className="ui-img-hover fn-left">
                        <img src={blog.thumbnail}/>
                      </div>
                    </a>
                    <div className="fn-right">
                      <div className="ui-detail-box">
                        <h2>
                          <a href={newsDetailPath}>{blog.title}</a>
                        </h2>
                        <p>
                          <a href={newsDetailPath}>{blog.description.length>122 ? (blog.description.substr(0, 122)+'......') : blog.description}</a>
                        </p>
                      </div>
                      <span>{blog.createTime}</span>
                    </div>
                  </section>
                )
              })
            }
          </div>
            {/* <div id="anpPage" className="ui-news-pages">
        <a style={{marginRight:'5px'}}>首页</a><a style={{marginRight:"5px"}}>上一页</a><span className="active" style={{marginRight:"5px"}}>1</span><a href="/news/original/list2.html" style={{marginRight:"5px"}}>2</a><a href="/news/original/list3.html" style={{marginRight:"5px"}}>3</a><a href="/news/original/list4.html" style={{marginRight:"5px"}}>4</a><a href="/news/original/list5.html" style={{marginRight:"5px"}}>5</a><a href="/news/original/list6.html" style={{marginRight:"5px"}}>...</a><a href="/news/original/list2.html" style={{marginRight:"5px"}}>下一页</a><a href="/news/original/list110.html" style={{marginRight:"5px"}}>尾页</a>
      </div> */}
          </div>
        </div>
    </div>
  )
}