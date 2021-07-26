import * as React from 'react';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/styles';

import { CategoryInterface } from './types';
import CategoryItem from './CategoryItem';

export const useStyles = makeStyles({
    root: {
      maxWidth: "100vw",
      width: "300px",
    }
  });

interface Properties{
  setMenuClose(): void;
  data: any;
}

export default function BlogNav({ setMenuClose, data }: Properties) {
  const classes = useStyles();

  return (
    <List
      className={classes.root}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Biocoal.co.nz
        </ListSubheader>
      }
    >
      {data?.blogPost?.children?.map(( child: CategoryInterface ) => (
        <CategoryItem setMenuClose={setMenuClose} blogPost={child} level={1} />
      ))}
    </List>
  );
}