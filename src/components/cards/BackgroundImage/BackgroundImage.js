import React from "react";
import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";

import Header from "../../Header";
import Breadcrumbs from "../../Breadcrumbs";

import SectionWithBackgroundImage, {
  SectionWithBackgroundImagePropTypes,
  SectionWithBackgroundImageDefaultProps
} from "../../SectionWithBackgroundImage";

import backgroundImage from "./background-image.png";

import CardWithMedia, {
  CardWithMediaPropTypes,
  CardWithMediaDefaultProps
} from "../../CardWithMedia";

import hero from "./hero.png";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";

/**
 * Defines the prop types
 */
const propTypes = {
  section: PropTypes.shape(SectionWithBackgroundImage)
};

/**
 * Defines the default props
 */
const defaultProps = {
  section: SectionWithBackgroundImageDefaultProps
};

/**
 * Styles the component
 */
const useStyles = makeStyles(theme => ({
  section1: {
    position: "relative",
    width: "100vw",
    height: "100vh"
  }
}));

/**
 * Styles for the section 2 Hero
 */
const useStyles2 = makeStyles(theme => ({
  section2: {
    position: "relative",
    width: "100vw",
    height: "100vh"
  },

  media: {
    width: "100vw",
    height: "calc(100vw / 1.83)", // aspectRatio={1494 / 814 = 1.83}

    [theme.breakpoints.up("lg")]: {
      width: "76vw",
      height: "calc(76vw / 1.83)"
    },

    [theme.breakpoints.up("xl")]: {
      width: "66vw",
      height: "calc(66vw / 1.83)"
    }
  },

  actionsClass: {
    /**
     * Could not make spacing work with the MUI API: https://material-ui.com/api/card-actions/#cardactions-api
     */
    marginLeft: theme.spacing(1)
  }
}));

/**
 * Displays the component as a Card
 */
const BackgroundImageAsCard = props => {
  const { url } = props;

  return (
    <Card className="BackgroundImageAsCard">
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          <Link component={RouterLink} to={`${url}/background-image`}>
            Background image
          </Link>
        </Typography>
        <Typography variant="body2" color="textSecondary" component="div">
          <p>A background image stretched under another element.</p>
          <p>
            This is not a MUI element however some designers are still mixing it
            with MUI.
          </p>
          <p>
            The only way to solve this issue with MUI is to use a `CardMedia`
            component which displays images as a background image by default.
          </p>
        </Typography>
      </CardContent>
    </Card>
  );
};

/**
 * Displays the component
 */
const BackgroundImage = props => {
  const { section } = props;

  const classes = useStyles();
  const { section1 } = classes;

  // First section
  const sectionWithBackgroundImage = {
    image: backgroundImage,
    klasses: classes,
    content: "Simple text"
  };

  const classes2 = useStyles2();
  const { section2 } = classes2;

  // Second section
  const cardContent = (
    <>
      <Typography gutterBottom variant="h4">
        Malesuada pellentesque
      </Typography>
      <Typography gutterBottom variant="h5">
        Lacus maecenas nisl
      </Typography>
      <Typography variant="subtitle1">
        Nulla eleifend pulvinar purus, molestie euismod odio imperdiet ac. Ut
        sit amet erat nec nibrhoncus varius in non lorem. Donec interdum, lectus
        in convallis pulvinar, enim elit porta sapien,vel finibus erat felis sed
        neque.
      </Typography>
    </>
  );

  const cardActions = (
    <>
      <Button variant="contained" size="large" href="#">
        View the app
      </Button>
    </>
  );

  const cardWithMedia = {
    image: hero,
    imageTitle: "Hero image",
    content: cardContent,
    actions: cardActions,
    klasses: classes2
  };

  const sectionWithBackgroundImage2 = {
    image: backgroundImage,
    klasses: classes2,
    content: <CardWithMedia {...cardWithMedia} />
  };

  return (
    <Container className="BackgroundImage" maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Header currentPage="Cards" />
        </Grid>
        <Grid item xs={12}>
          <Breadcrumbs />
        </Grid>
        <Grid item xs={12} className={section1}>
          <SectionWithBackgroundImage {...sectionWithBackgroundImage} />
        </Grid>
        <Grid item xs={12} className={section2}>
          <SectionWithBackgroundImage {...sectionWithBackgroundImage2} />
        </Grid>
      </Grid>
    </Container>
  );
};

BackgroundImage.propTypes = propTypes;
BackgroundImage.defaultProps = defaultProps;

export default BackgroundImage;
export {
  propTypes as BackgroundImagePropTypes,
  defaultProps as BackgroundImageDefaultProps,
  BackgroundImageAsCard
};
