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
const Learn = props => {
  const { path, url } = useRouteMatch();

  return (
    <>
      <Switch>
        <Route exact path={path}>
          <Container className="Learn" maxWidth="lg">
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Header currentPage="Learn" />
              </Grid>
            </Grid>
            {/*
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={4}>
                <ControlledAsCard url={url} />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <UncontrolledCard url={url} />
              </Grid>
            </Grid>
			*/}
          </Container>
        </Route>
        {/*
        <Route path={`${path}/uncontrolled`}>
          <Uncontrolled />
        </Route>
        <Route path={`${path}/controlled`}>
          <Controlled />
        </Route>
		*/}
      </Switch>
    </>
  );
};

Learn.propTypes = propTypes;
Learn.defaultProps = defaultProps;

export default Learn;
export { propTypes as LearnPropTypes, defaultProps as LearnDefaultProps };
