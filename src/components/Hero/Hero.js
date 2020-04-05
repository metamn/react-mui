import React from "react";
import PropTypes from "prop-types";

import { Media } from "./../../hooks";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

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
    [`${Media.portrait}`]: {
      flexDirection: "column"
    },
    [`${Media.landscape}`]: {
      alignItems: "center"
    }
  },
  media: {
    width: 512,
    height: 512,
    [`${Media.landscape}`]: {
      order: 2
    }
  }
});

/**
 * Displays the component
 */
const Hero = props => {
  const classes = useStyles();

  return (
    <Grid container className="Hero">
      <Grid item xs={12}>
        <Card className={classes.card}>
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
              component="div"
              className={classes.description}
            >
              <p>A short description goes here.</p>
              <p>
                Preferably 1-2 sentences only which are precise and straight to
                the point
              </p>
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
