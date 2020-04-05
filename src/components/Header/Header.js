import React from "react";
import PropTypes from "prop-types";

import Logo from "../Logo";
import Menu from "../Menu";

import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

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
const Header = props => {
  return (
    <AppBar className="Header" position="static">
      <Toolbar>
        <Grid container spacing={1} alignItems="center" wrap="nowrap">
          <Grid item>
            <Logo />
          </Grid>
          <Grid item>
            <Typography variant="h6">Home</Typography>
          </Grid>
          <Grid item>
            <Menu />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
export { propTypes as HeaderPropTypes, defaultProps as HeaderDefaultProps };
