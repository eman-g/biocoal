import React from 'react';
import ReactMarkdown from 'markdown-to-jsx';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const styles = (theme) => ({
  listItem: {
    marginTop: theme.spacing(1),
  },
  img: {
    width: "60% !important"
  },
  blockquote: {
    margin: theme.spacing(1),
    padding: theme.spacing(2),
    fontWeight: 200,
    fontSize: "1.5em",
    borderLeft: `solid ${2}px ${theme.palette.primary.light}`
  }
});

const options = {
  overrides: {
    h1: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: 'h5',
      },
    },
    h2: { component: Typography, props: { gutterBottom: true, variant: 'h6' } },
    h3: { component: Typography, props: { gutterBottom: true, variant: 'subtitle1' } },
    h4: {
      component: Typography,
      props: { gutterBottom: true, variant: 'caption', paragraph: true },
    },
    blockquote: {
      component: withStyles(styles)(({ classes, ...props }) => {
        console.log(props.children[0]) //
        return(<Typography varient="h1" class={classes.blockquote} {...props} >
          "{props.children[0]?.props?.children[0]}"
        </Typography>)
    }),
    },
    p: { component: Typography, props: { paragraph: true } },
    a: { component: Link },
    img: {
      component: withStyles(styles)(({ classes, ...props }) => (
        <img class={classes.img} {...props} />
      )),
    },
    li: {
      component: withStyles(styles)(({ classes, ...props }) => (
        <li className={classes.listItem}>
          <Typography component="span" {...props} />
        </li>
      )),
    },
  },
};

export default function Markdown(props) {
  return <ReactMarkdown options={options} {...props} />;
}
