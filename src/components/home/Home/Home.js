import React from "react";
import PropTypes from "prop-types";

import Header from "../../Header";
import Hero from "../Hero";
import Features from "../Features";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

/**
 * Defines the prop types
 */
const propTypes = {};

/**
 * Defines the default props
 */
const defaultProps = {};

/**
 * Displays the component
 */
const Home = props => {
  return (
    <Container className="Home" maxWidth={false}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Header currentPage="Home" />
        </Grid>
        <Grid item xs={12}>
          <Hero />
        </Grid>
        <Grid item xs={12}>
          <Features />
        </Grid>
      </Grid>
    </Container>
  );
};

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;

export default Home;
export { propTypes as HomePropTypes, defaultProps as HomeDefaultProps };
