import React from "react";
import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";

import Header from "../../Header";
import Breadcrumbs from "../../Breadcrumbs";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

/**
 * Defines the prop types
 */
const propTypes = {};

/**
 * Defines the default props
 */
const defaultProps = {};

/**
 * Displays the component as a Card
 */
const HeroAsCard = props => {
  const { url } = props;

  return (
    <Card className="HeroAsCard">
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          <Link component={RouterLink} to={`${url}/hero`}>
            Hero
          </Link>
        </Typography>
        <Typography variant="body2" color="textSecondary" component="div">
          <p>A common element containing an image, text and call for action.</p>
          <p>
            See{" "}
            <Link href="https://www.quora.com/What-is-the-definition-of-a-hero-element-in-UI-design">
              What is the definition of a hero element in UI design?
            </Link>
          </p>
        </Typography>
      </CardContent>
    </Card>
  );
};

/**
 * Displays the component
 */
const Hero = props => {
  return (
    <Container className="Hero" maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Header currentPage="Cards" />
        </Grid>
        <Grid item xs={12}>
          <Breadcrumbs />
        </Grid>
        <Grid item xs={12}>
          Hero
        </Grid>
      </Grid>
    </Container>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
export {
  propTypes as HeroPropTypes,
  defaultProps as HeroDefaultProps,
  HeroAsCard
};
