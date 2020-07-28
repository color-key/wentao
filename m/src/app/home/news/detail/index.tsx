import React from 'react';
import {getJson} from '@fay-react/lib/fetch';
import {BASE_URL} from '@/env';
import {Text} from '@fay-react/material/richText';
import { useRouter } from 'next/router';

export default () => {

  const [data, setData] = React.useState<any>(null);
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
    <>
      <div className="pagination"></div>
      <div className="ui-companyNews new-content">
        <h5>{data && data.title}</h5>
        <div className="ui-newDetails">
          {data && <Text value={data.content}/>}
        </div>
      </div>
    </>
  )
}