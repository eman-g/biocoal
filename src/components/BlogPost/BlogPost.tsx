import React, {useEffect} from 'react';
//Material-UI
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { green } from '@material-ui/core/colors';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
// Markdown
import Markdown from 'Markdown';
// React Router
import {
  useParams,
  useHistory
} from "react-router-dom";
// Apollo GraphQL
import { useQuery } from '@apollo/client';
import { Queries } from 'graphqlApi';
// Moment
import moment from 'moment';

import BlogShare from './share';
import Comment from 'components/Comment/Comment';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(4, 8),
      },
      [theme.breakpoints.down('xs')]: {
        padding: theme.spacing(4, 2),
      },
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

export default function RecipeReviewCard() {
  const classes = useStyles();
  const history = useHistory();
  const { slug } = useParams();
  const { loading, error, data } = useQuery(Queries.GET_BLOGPOST, {
    variables: {
      where: { slug: slug },
      stage: "PUBLISHED"
    }
  });

  useEffect(()=>{console.log("blogPost", data?.blogPost)}, [data])

  return (
    <React.Fragment>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {data?.blogPost?.author.name[0]}
            </Avatar>
          }
          title={data?.blogPost?.author.name}
          subheader={moment(data?.blogPost?.publishedAt).format("MMMM Do, YYYY")}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="h1">
            {data?.blogPost?.title}
          </Typography>
        </CardContent>
        {data?.blogPost?.banner &&
          <CardMedia
            className={classes.media}
            image={data?.blogPost?.banner.url}
            title="banner"
          />
        }
        <CardContent>
          <Markdown className={classes.markdown}>
            {
              (data?.blogPost?.content.markdown) ? data?.blogPost?.content.markdown : ""
            }
          </Markdown>
        </CardContent>
        <CardActions disableSpacing>
          {data?.blogPost && 

            <BlogShare blogPost={data.blogPost} />

          }
          
          {data?.blogPost?.next && 
            <Button 
              className={classes.expand} 
              size="small" 
              color="primary"
              endIcon={<ArrowRightAltIcon />}
              onClick={(e)=>history.push(`/${data?.blogPost?.next.slug}`)}
            >
              Next Up: "{data?.blogPost?.next.title}"
            </Button>
          } 
        </CardActions>
      </Card>
      {data?.blogPost?.comments?.map(comment => (<Comment comment={comment} />))}
    </React.Fragment>
  );
}