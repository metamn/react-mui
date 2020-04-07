import React from "react";
import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";

import Header from "../../Header";
import Breadcrumbs from "../../Breadcrumbs";
import TextField from "../TextField";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
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
const ControlledAsCard = props => {
  const { url } = props;

  return (
    <Card className="ControlledAsCard">
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Controlled forms
        </Typography>
        <Typography variant="body2" color="textSecondary" component="div">
          <p>
            React holds the state of the form inputs and controls their change.
          </p>
          <p>It's the recommended way to deal with forms.</p>
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
          component={RouterLink}
          to={`${url}/controlled`}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

/**
 * Displays the component
 */
const Controlled = props => {
  return (
    <Container className="Controlled" maxWidth="lg">
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Header currentPage="Forms" />
        </Grid>
        <Grid item xs={12}>
          <Breadcrumbs />
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h4">Controlled forms</Typography>
              <Typography variant="body1">
                <ul>
                  <li>
                    React holds the state of the form inputs and controls their
                    change.
                  </li>
                  <li>It's the recommended way to deal with forms.</li>
                  <li>
                    See{" "}
                    <Link href="https://reactjs.org/docs/forms.html#controlled-components">
                      the official React documentation
                    </Link>
                  </li>
                </ul>
              </Typography>
              <Typography variant="body1">
                Please find below the controlled implementation of a few common
                Material UI input types.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField />
        </Grid>
      </Grid>
    </Container>
  );
};

Controlled.propTypes = propTypes;
Controlled.defaultProps = defaultProps;

export default Controlled;
export {
  propTypes as ControlledPropTypes,
  defaultProps as ControlledDefaultProps,
  ControlledAsCard
};