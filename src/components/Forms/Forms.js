import React from "react";
import PropTypes from "prop-types";

import Header from "../Header";

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
const Forms = props => {
  return (
    <Container className="Forms" maxWidth={false}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Header currentPage="Forms" />
        </Grid>
      </Grid>
    </Container>
  );
};

Forms.propTypes = propTypes;
Forms.defaultProps = defaultProps;

export default Forms;
export { propTypes as FormsPropTypes, defaultProps as FormsDefaultProps };
