import React from "react";
import PropTypes from "prop-types";

import Header from "../../Header";

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
const Theming = props => {
  return (
    <Container className="Theming" maxWidth={false}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Header currentPage="Theming" />
        </Grid>
      </Grid>
    </Container>
  );
};

Theming.propTypes = propTypes;
Theming.defaultProps = defaultProps;

export default Theming;
export { propTypes as ThemingPropTypes, defaultProps as ThemingDefaultProps };
