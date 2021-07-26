import * as React from 'react';
// Material-UI
import List from '@material-ui/core/List';
import {ListItemButton} from '@material-ui/core';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { useTheme } from '@material-ui/core/styles';
// React Router
import { useHistory } from "react-router-dom";

import { CategoryInterface, CategoryItemProperties } from './types';

export default function CategoryItem({ setMenuClose, blogPost, level }: CategoryItemProperties) {
  const theme = useTheme();
  const [open, setOpen] = React.useState<boolean>(false);
  const history = useHistory();
  
  function handleClick() {
    history.push(`/${blogPost.slug}`);
    setMenuClose();
  }

  const toggleOpen = (e: React.MouseEvent) => {
    e.stopPropagation();
    setOpen(prevState => (!prevState));
  };

  return (
    <React.Fragment>
      <ListItemButton style={{paddingLeft: theme.spacing(level)}} onClick={(e)=>handleClick()}>
        <ListItemText primary={blogPost.title} />
        {Boolean(blogPost.children.length) && 
          <ListItemSecondaryAction>
            <IconButton 
                edge="start" 
                color="inherit" 
                aria-label="menu"
                onClick={(e)=>toggleOpen(e)}
              >
              {(open) ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
          </ListItemSecondaryAction>
        }
      </ListItemButton>
      {Boolean(blogPost.children.length) &&
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {blogPost.children?.map( ( child: CategoryInterface ) => (
              <CategoryItem setMenuClose={setMenuClose} blogPost={child} level={(level + 1)} />
            )) }
          </List>
        </Collapse>
      }
    </React.Fragment>
  );
}