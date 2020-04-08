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
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

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
const DarkModeAsCard = props => {
  const { url } = props;

  return (
    <Card className="DarkModeCard">
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          <Link component={RouterLink} to={`${url}/darkmode`}>
            Dark Mode
          </Link>
        </Typography>
        <Typography variant="body2" color="textSecondary" component="div">
          <p>
            If the user prefers dark mode then the dark theme is displayed by
            default.
          </p>
        </Typography>
      </CardContent>
    </Card>
  );
};

/**
 * Displays the component
 */
const DarkMode = props => {
  return (
    <Container className="DarkMode" maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Header currentPage="Theming" />
        </Grid>
        <Grid item xs={12}>
          <Breadcrumbs />
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h4">Dark mode</Typography>
              <Typography variant="body1" component="div">
                <ul>
                  <li>
                    If the user prefers dark mode then the dark theme is
                    displayed by default.
                  </li>
                </ul>
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                color="primary"
                href="https://github.com/metamn/react-mui/blob/master/src/hooks/useDarkMode/useDarkMode.js"
              >
                See code
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

DarkMode.propTypes = propTypes;
DarkMode.defaultProps = defaultProps;

export default DarkMode;
export {
  propTypes as DarkModePropTypes,
  defaultProps as DarkModeDefaultProps,
  DarkModeAsCard
};
