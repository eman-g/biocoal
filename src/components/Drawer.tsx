import * as React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { useQuery } from '@apollo/client';
import { Queries } from 'graphqlApi';

import { BlogNav } from 'components/BlogNav';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: "100vw",
      width: "350px",
      padding: theme.spacing(1)
    }
  })
);

interface Properties {
  open: boolean;
  setOpen: (value: boolean) => void;
}

export default function Menu({open, setOpen}: Properties) {
  const classes = useStyles();
  const { loading, error, data } = useQuery(Queries.GET_ROOT, {
    variables: {
      where: { id: 'ckrisrbhc7lh10b40g7pkfmx4' },
      stage: "PUBLISHED"
    }
  });

  const toggleDrawer = (value: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      setOpen(value);
    };

  return (
    <Drawer
      anchor={'left'}
      open={open}
      className={classes.root}
      onClose={toggleDrawer(false)}
    >
      <BlogNav setMenuClose={()=>setOpen(false)} data={data} />
    </Drawer>
  );
}