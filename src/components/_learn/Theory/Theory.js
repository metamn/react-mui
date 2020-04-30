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
const TheoryAsCard = props => {
  const { url } = props;

  return (
    <Card className="TheoryAsCard">
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          <Link component={RouterLink} to={`${url}/theory`}>
            Theory
          </Link>
        </Typography>
        <Typography variant="body2" color="textSecondary" component="div">
          <p>
            React holds the state of the form inputs and controls their change.
          </p>
          <p>It's the recommended way to deal with forms.</p>
        </Typography>
      </CardContent>
    </Card>
  );
};

/**
 * Displays the component
 */
const Theory = props => {
  return (
    <Container className="Theory" maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Header currentPage="Learn" />
        </Grid>
        <Grid item xs={12}>
          <Breadcrumbs />
        </Grid>
        <Grid item xs={12}>
          xxx
        </Grid>
      </Grid>
    </Container>
  );
};

Theory.propTypes = propTypes;
Theory.defaultProps = defaultProps;

export default Theory;
export {
  propTypes as TheoryPropTypes,
  defaultProps as TheoryDefaultProps,
  TheoryAsCard
};
