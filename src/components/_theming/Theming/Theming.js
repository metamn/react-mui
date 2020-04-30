import React from "react";
import PropTypes from "prop-types";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

import Header from "../../Header";
import DarkMode from "../DarkMode";
import ThemeSwitcher from "../ThemeSwitcher";
import Finster from "../Finster";

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
  const { path, url } = useRouteMatch();

  return (
    <>
      <Switch>
        <Route exact path={path}>
          <Container className="Theming" maxWidth="lg">
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Header currentPage="Theming" />
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={4}>
                <DarkMode />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <ThemeSwitcher />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Finster />
              </Grid>
            </Grid>
          </Container>
        </Route>
      </Switch>
    </>
  );
};

Theming.propTypes = propTypes;
Theming.defaultProps = defaultProps;

export default Theming;
export { propTypes as ThemingPropTypes, defaultProps as ThemingDefaultProps };
