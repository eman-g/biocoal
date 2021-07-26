import React, {useState} from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import MenuBar from 'components/MenuBar';
import BlogPost from 'components/BlogPost';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    gridContainer: {
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(8),
      display: 'flex',
      justifyContent: 'center'
    }
  }),
);

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MenuBar />
      <Grid container className={classes.gridContainer}>
        <Grid item spacing={2} xs={12} sm={10} md={8} lg={7}>
          <Switch>
            <Route exact path="/" children={<Redirect to="/home" />} />
            <Route path="/:slug" children={<BlogPost />} />
          </Switch>
        </Grid> 
      </Grid>
    </div>
  );
}