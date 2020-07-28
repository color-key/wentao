import React from 'react';
import {getJson} from '@fay-react/lib/fetch';
import {BASE_URL, PATH_PREFIX} from '@/env';
import {BlogType} from '.';
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';

const pageNum = 1;
const pageSize = 10;

const useStyles = makeStyles((theme) => ({
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(6)
  },
}));

export default () => {
  const classes = useStyles();

  const [data, setData] = React.useState<BlogType[]>([]);
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

  const handleChange = (_event: any, value: any) => {
    setPage(value);
  };

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
          <Pagination className={classes.pagination} count={pageCount} page={page} onChange={handleChange} />
          </div>
        </div>
    </div>
  )
}