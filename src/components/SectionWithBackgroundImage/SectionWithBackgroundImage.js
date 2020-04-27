import React from "react";
import PropTypes from "prop-types";

import clsx from "clsx";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

/**
 * Defines the prop types
 */
const propTypes = {
  image: PropTypes.element,
  content: PropTypes.element,
  klasses: PropTypes.any
};

/**
 * Defines the default props
 */
const defaultProps = {
  image: null,
  content: null,
  klasses: ""
};

/**
 * Styles the component
 */
const useStyles = makeStyles(theme => ({
  background: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    zIndex: "-1",
    backgroundColor: "transparent"
  },

  backgroundImage: {
    width: "100%",
    height: "100%"
  }
}));

/**
 * Displays the component
 */
const SectionWithBackgroundImage = props => {
  const { image, content, klasses } = props;

  const classes = useStyles();
  const { container, background, backgroundImage } = classes;

  const {
    container: klassContainer,
    background: klassBackground,
    backgroundImage: klassBackgroundImage
  } = klasses;

  return (
    <Grid
      container
      className={clsx("SectionWithBackgroundImage", container, klassContainer)}
      spacing={0}
    >
      {image && (
        <Card
          className={clsx("Background", background, klassBackground)}
          elevation={0}
          square
        >
          <CardMedia
            image={image}
            className={clsx(
              "BackgroundImage",
              backgroundImage,
              klassBackgroundImage
            )}
          />
        </Card>
      )}
      {content}
    </Grid>
  );
};

SectionWithBackgroundImage.propTypes = propTypes;
SectionWithBackgroundImage.defaultProps = defaultProps;

export default SectionWithBackgroundImage;
export {
  propTypes as SectionWithBackgroundImagePropTypes,
  defaultProps as SectionWithBackgroundImageDefaultProps
};
