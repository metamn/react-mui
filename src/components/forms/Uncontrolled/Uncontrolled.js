import React from "react";
import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";

import Header from "../../Header";
import Breadcrumbs from "../../Breadcrumbs";

import TextFieldUncontrolled from "../TextFieldUncontrolled";

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
 * Displays the component as a card
 */
const UncontrolledCard = props => {
  const { url } = props;

  return (
    <Card className="UncontrolledCard">
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          <Link component={RouterLink} to={`${url}/uncontrolled`}>
            Uncontrolled forms
          </Link>
        </Typography>
        <Typography variant="body2" color="textSecondary" component="div">
          <p>Form inputs are controlled by something else than React.</p>
          <p>
            Usually by the DOM itself or a third party library like Formik or
            React Hook Forms.
          </p>
        </Typography>
      </CardContent>
    </Card>
  );
};

/**
 * Displays the component as a card
 */
const Uncontrolled = props => {
  return (
    <Container className="Controlled" maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Header currentPage="Forms" />
        </Grid>
        <Grid item xs={12}>
          <Breadcrumbs />
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h4">Uncontrolled forms</Typography>
              <Typography variant="body1">
                <ul>
                  <li>
                    Form inputs are controlled by something else than React.
                  </li>
                  <li>
                    Usually by the DOM itself or a third party library like
                    Formik or React Hook Forms.
                  </li>
                  <li>
                    See{" "}
                    <Link href="https://reactjs.org/docs/uncontrolled-components.html">
                      the official React documentation
                    </Link>
                  </li>
                </ul>
              </Typography>
              <Typography variant="body1">
                <p>
                  Uncontrolled forms are mostly about the third party libraries.
                  They all look tempting but sometimes introduce more overhead
                  than benefits.
                </p>
                <ul>
                  <li>
                    <Link href="https://github.com/metamn/use-form">
                      https://github.com/metamn/use-form
                    </Link>
                  </li>
                  <li>
                    <Link href="https://github.com/metamn/react-forms">
                      https://github.com/metamn/react-forms
                    </Link>
                  </li>
                  <li>
                    <Link href="https://github.com/metamn/react-forms-jsonschema">
                      https://github.com/metamn/react-forms-jsonschema
                    </Link>
                  </li>
                </ul>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextFieldUncontrolled />
        </Grid>
      </Grid>
    </Container>
  );
};

Uncontrolled.propTypes = propTypes;
Uncontrolled.defaultProps = defaultProps;

export default Uncontrolled;
export {
  propTypes as UncontrolledPropTypes,
  defaultProps as UncontrolledDefaultProps,
  UncontrolledCard
};
