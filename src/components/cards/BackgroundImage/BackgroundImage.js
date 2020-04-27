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
const useStyles = makeStyles(theme => ({}));

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
            The only way to solve this issue the MUI way is to use a `CardMedia`
            component which displays images as a background image
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

  const sectionWithBackgroundImage = {
    image: backgroundImage,
    klasses: classes,
    content: "Simple text"
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
        <Grid item xs={12}>
          <SectionWithBackgroundImage {...sectionWithBackgroundImage} />
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
