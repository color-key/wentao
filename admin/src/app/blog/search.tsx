import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import TextField from "@/components/text-field";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {SearchStateType} from './index';
import {PATH_PREFIX} from '@/env';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    margin: theme.spacing(2, 0)
  },
  btn: {
    height: 40,
    marginLeft: theme.spacing(2)
  }
}));

interface Props{
  onSearch: (args: SearchStateType) => void
}

export default ({onSearch}: Props) => {
  const classes = useStyles();
  const initState = {searchKeywords: ''};
  const [state, setState] = React.useState<SearchStateType>(initState);

  const handleChange = (key: string) => (e: any) => {
    setState({...state, [key]: e.target.value})
  }

  const handleSearch = () => {
    onSearch(state);
  }

  const handleReset = () => {
    onSearch(initState);
  }

  const handleEdit = () => {
    window.open(PATH_PREFIX+'/blog/edit');
  }

  return (
    <Paper className={classes.root}>
      <Grid container spacing={2}>
        <Grid container item xs={8}>
          <Grid item xs={4}>
            <TextField
              label="搜索"
              value={state.searchKeywords}
              onChange={handleChange('orderNo')}
            />
          </Grid>
        </Grid>
        <Grid container item xs={4} justify={"center"} alignItems={"center"}>
          <Button className={classes.btn} variant={"contained"} color={"primary"} onClick={handleSearch}>查询</Button>
          <Button className={classes.btn} variant={"contained"} onClick={handleEdit}>添加</Button>
          <Button className={classes.btn} variant={"contained"} onClick={handleReset}>重置</Button>
        </Grid>
      </Grid>
    </Paper>
  )
}
