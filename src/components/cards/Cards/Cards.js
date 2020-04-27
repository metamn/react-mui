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
import Hero, { HeroAsCard } from "../Hero";
import BackgroundImage, { BackgroundImageAsCard } from "../BackgroundImage";

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
const Cards = props => {
  const { path, url } = useRouteMatch();

  return (
    <>
      <Switch>
        <Route exact path={path}>
          <Container className="Cards" maxWidth="lg">
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Header currentPage="Cards" />
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={4}>
                <HeroAsCard url={url} />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <BackgroundImageAsCard url={url} />
              </Grid>
            </Grid>
          </Container>
        </Route>
        <Route path={`${path}/hero`}>
          <Hero />
        </Route>
        <Route path={`${path}/background-image`}>
          <BackgroundImage />
        </Route>
      </Switch>
    </>
  );
};

Cards.propTypes = propTypes;
Cards.defaultProps = defaultProps;

export default Cards;
export { propTypes as CardsPropTypes, defaultProps as CardsDefaultProps };
