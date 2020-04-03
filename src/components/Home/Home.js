import React from "react";
import PropTypes from "prop-types";

import Header from "../Header";

import Container from "@material-ui/core/Container";

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
      <Header />
    </Container>
  );
};

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;

export default Home;
export { propTypes as HomePropTypes, defaultProps as HomeDefaultProps };
