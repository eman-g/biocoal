import React, {useEffect} from 'react';
//Material-UI
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { green } from '@material-ui/core/colors';
// Moment
import moment from 'moment';

import { Types } from 'graphqlApi';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(2),
      padding: theme.spacing(2, 2),
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: green[500],
    },
    markdown: {
      ...theme.typography.body2,
      padding: theme.spacing(3, 0),
    }
  }),
);

interface Properties {
  comment: Types.Comment
}

export default function Comment({ comment } : Properties) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {comment.name[0]}
          </Avatar>
        }
        title={comment.name}
        subheader={moment(comment.publishedAt).format("MMMM Do, YYYY")}
      />
      <CardContent>
        <Typography variant="body1">
          {comment.content}
        </Typography>
      </CardContent>
    </Card>
  );
}