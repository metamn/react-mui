import React from "react";
import PropTypes from "prop-types";

import Grid from "@material-ui/core/Grid";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import json2mq from "json2mq";

import logo from "./logo512.png";

/**
 * Defines the prop types
 */
const propTypes = {};

/**
 * Defines the default props
 */
const defaultProps = {};

/**
 * Styles the component
 */
const useStyles = makeStyles({
  card: {
    display: "flex",
    "& .landscape": {
      alignItems: "center"
    }
  },
  media: {
    width: 512,
    height: 512,
    order: 2
  },
  content: {
    order: 1
  }
});

/**
 * Displays the component
 */
const Hero = props => {
  const classes = useStyles();
  const isPortrait = useMediaQuery(json2mq({ orientation: "portrait" }));
  const orientation = isPortrait ? "portrait" : "landscape";

  return (
    <Grid container className="Hero">
      <Grid item xs={12}>
        <Card className={`${classes.card} ${orientation}`}>
          <CardMedia
            className={classes.media}
            image={logo}
            title="Call to action"
          />
          <CardContent className={classes.content}>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className={classes.headline}
            >
              Hero Headline
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.description}
            >
              A short description goes here. Preferably 1-2 sentences only which
              are short, precise and straight to the point
            </Typography>
            <CardActions className={classes.actions}>
              <Button size="small" color="primary">
                Sign up
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
export { propTypes as HeroPropTypes, defaultProps as HeroDefaultProps };
