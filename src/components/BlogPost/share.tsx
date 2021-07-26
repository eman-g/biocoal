import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {
  EmailShareButton,
  FacebookShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
} from "react-share";
import {
  EmailIcon,
  FacebookIcon,
  RedditIcon,
  TelegramIcon,
  TwitterIcon,
} from "react-share";

import {BlogShareProperties } from './types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1)
    }
  }),
);

export default function BlogShare({blogPost}: BlogShareProperties) {
  const classes = useStyles();
  const { title, slug } = blogPost;

  return (
    <React.Fragment>
      <EmailShareButton 
        className={classes.button}
        subject={title} 
        body={""} 
        url={`https://www.biocoal.nz/${slug}`} 
        >
          <EmailIcon size={30} round={true}  />
        </EmailShareButton>
      <FacebookShareButton 
        className={classes.button}
        quote={title} 
        hashtag={"Biocoal"} 
        url={`https://www.biocoal.nz/${slug}`} 
        >
          <FacebookIcon size={30} round={true}  />
      </FacebookShareButton>
      <TwitterShareButton 
        className={classes.button}
        title={title} 
        hashtags={["Biocoal", "EnergyCrisis"]}
        via={"biocoalnz"}
        url={`https://www.biocoal.nz/${slug}`} 
        >
          <TwitterIcon size={30} round={true}  />
      </TwitterShareButton>
      <RedditShareButton 
        className={classes.button}
        title={title} 
        url={`https://www.biocoal.nz/${slug}`} 
        >
          <RedditIcon size={30} round={true}  />
      </RedditShareButton>
      <TelegramShareButton 
        className={classes.button}
        title={title} 
        url={`https://www.biocoal.nz/${slug}`} 
        >
          <TelegramIcon size={30} round={true}  />
      </TelegramShareButton>
    </React.Fragment>
  );
}