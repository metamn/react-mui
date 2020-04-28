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

  cardContent: {
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
    cardMedia,
    contentContainer,
    cardContent,
    cardActions
  } = classes;

  const {
    card: card2,
    cardContainer: cardContainer2,
    imageContainer: imageContainer2,
    cardMedia: cardMedia2,
    contentContainer: contentContainer2,
    cardContent: cardContent2,
    cardActions: cardActions2
  } = klasses;

  return (
    <Card className={clsx("CardWithMedia", card, card2)} elevation={0} square>
      <Grid
        container
        className={clsx(
          "CardWithMediaCardContainer",
          cardContainer,
          cardContainer2
        )}
      >
        {image && (
          <Grid
            item
            className={clsx(
              "CardWithMediaImageContainer",
              imageContainer,
              imageContainer2
            )}
            xs={12}
            md={6}
            xl={5}
          >
            <CardMedia
              className={clsx("CardMedia", cardMedia, cardMedia2)}
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
              contentContainer2
            )}
            xs={12}
            md={6}
            xl={5}
          >
            <CardContent
              className={clsx("CardContent", cardContent, cardContent2)}
            >
              {content}
            </CardContent>
            {actions && (
              <CardActions
                className={clsx("CardActions", cardActions, cardActions2)}
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
