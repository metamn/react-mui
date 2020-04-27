import React from "react";
import PropTypes from "prop-types";

import clsx from "clsx";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

/**
 * Defines the prop types
 */
const propTypes = {
  image: PropTypes.element,
  imageTitle: PropTypes.string,
  content: PropTypes.element,
  actions: PropTypes.element,
  klasses: PropTypes.any
};

/**
 * Defines the default props
 */
const defaultProps = {
  image: null,
  imageTitle: "",
  content: null,
  actions: null,
  klasses: ""
};

/**
 * Styles the component
 */
const useStyles = makeStyles(theme => ({
  cardContainer: {
    /**
     * Remove negative margin
     */
    width: "100%",
    margin: 0,

    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      flexWrap: "nowrap",
      alignItems: "center"
    },

    [theme.breakpoints.up("xl")]: {
      justifyContent: "center"
    }
  },

  imageContainer: {
    [theme.breakpoints.up("md")]: {
      order: 2
    }
  },

  contentClass: {
    /**
     * Keep 45-60 chars per row for long text
     */
    maxWidth: "45em"
  }
}));

/**
 * Displays the component
 */
const CardWithMedia = props => {
  const { image, imageTitle, content, actions, klasses } = props;

  const classes = useStyles();
  const {
    card,
    cardContainer,
    imageContainer,
    media,
    contentContainer,
    contentClass,
    actionsClass
  } = classes;

  const {
    card: klassCard,
    cardContainer: klassCardContainer,
    imageContainer: klassImageContainer,
    media: klassMedia,
    contentContainer: klassContentContainer,
    contentClass: klassContentClass,
    actionsClass: klassActionsClass
  } = klasses;

  return (
    <Card
      className={clsx("CardWithMedia", card, klassCard)}
      elevation={0}
      square
    >
      <Grid
        container
        className={clsx(
          "CardWithMediaCardContainer",
          cardContainer,
          klassCardContainer
        )}
      >
        {image && (
          <Grid
            item
            className={clsx(
              "CardWithMediaImageContainer",
              imageContainer,
              klassImageContainer
            )}
            xs={12}
            md={6}
            xl={5}
          >
            <CardMedia
              className={clsx("CardMedia", media, klassMedia)}
              image={image}
              title={imageTitle}
            />
          </Grid>
        )}
        {content && (
          <Grid
            item
            className={clsx(
              "CardWithMediaContentContainer",
              contentContainer,
              klassContentContainer
            )}
            xs={12}
            md={6}
            xl={5}
          >
            <CardContent
              className={clsx("CardContent", contentClass, klassContentClass)}
            >
              {content}
            </CardContent>
            {actions && (
              <CardActions
                className={clsx("CardActions", actionsClass, klassActionsClass)}
              >
                {actions}
              </CardActions>
            )}
          </Grid>
        )}
      </Grid>
    </Card>
  );
};

CardWithMedia.propTypes = propTypes;
CardWithMedia.defaultProps = defaultProps;

export default CardWithMedia;
export {
  propTypes as CardWithMediaPropTypes,
  defaultProps as CardWithMediaDefaultProps
};
