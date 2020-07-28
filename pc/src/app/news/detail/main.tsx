import React from 'react';
import {getJson} from '@fay-react/lib/fetch';
import {BASE_URL} from '@/env';
import {BlogType} from '.';
import {Text} from '@fay-react/material/richText';
import { useRouter } from 'next/router';

export default () => {

  const [data, setData] = React.useState<BlogType|null>(null);
  const { query } = useRouter();

  React.useEffect(() => {
    if(query.id){
      getJson({path: BASE_URL+'/blog/findById?id='+query.id}).then(res => {
        console.log(res);
        if(res.success){
          setData(res.result[0]);
        }
      })
    }
  }, [JSON.stringify(query)]);

  return (
    data ?
    <div className="ui-pages ui-container">
      <div className="fn-clear">
        <div className="ui-news-text fn-left">
          <div className="ui-news-details-title">
            {data.title}
          </div>
          <div className="ui-news-info fn-clear">
            <span>发布时间：{data.createTime}</span>
          </div>
          <div id="news-content" className="ui-content1">
            <Text value={data.content}/>
          </div>
          {/* <div className="ui-news-extend">
            <div className="ui-news-more">
              <p id="nextDIV">
                <span>下一篇：</span><a href="6.html" id="next" title="下一篇动态：网狐未授权任何以个人名义出售公司产品">网狐未授权任何以个人名义出售公司产品</a>
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
    :
    <div/>
  )
}