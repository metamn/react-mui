import React from "react";
import PropTypes from "prop-types";

import { Media } from "./../../hooks";

import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from "@material-ui/core/styles";

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
const useStyles = makeStyles(theme => ({
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
    minWidth: 512,
    minHeight: 512,
    [`${Media.landscape}`]: {
      order: 2
    }
  },
  contentAndAction: theme => ({
    display: "flex",
    flexDirection: "column",
    [`${Media.portrait}`]: {
      paddingBottom: theme.spacing(4)
    }
  })
}));

/**
 * Displays the component
 */
const Hero = props => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Grid container className="Hero">
      <Grid item xs={12}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={logo}
            title="React + Material UI"
          />
          <div className={classes.contentAndAction}>
            <CardContent>
              <Typography gutterBottom variant="h3">
                React + Material UI
              </Typography>
              <Typography variant="body1">
                A best practices guide. For teams looking to write easy and
                uniform Material UI code.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                color="primary"
                href="https://github.com/metamn/react-mui"
              >
                Check the code on Github
              </Button>
            </CardActions>
          </div>
        </Card>
      </Grid>
    </Grid>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
export { propTypes as HeroPropTypes, defaultProps as HeroDefaultProps };
