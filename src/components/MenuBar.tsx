import React, {useState} from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// React Router
import {
  Link
} from "react-router-dom";

import Drawer from 'components/Drawer';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export default function MenuBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar>
          <IconButton 
            edge="start" 
            className={classes.menuButton} 
            color="inherit" 
            aria-label="menu"
            onClick={()=>setMenuOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Link to="/home" style={{textDecoration: "none", color: "inherit"}}>
            <Typography variant="h6" className={classes.title}>
              Biocoal NZ
            </Typography>
          </Link>
          {false &&
            <Button color="inherit">Login</Button>
          }
        </Toolbar>
      </AppBar>
      <Drawer open={menuOpen} setOpen={setMenuOpen} />
    </React.Fragment>
  );
}