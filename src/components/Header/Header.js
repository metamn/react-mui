import React from "react";
import PropTypes from "prop-types";

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
    <div className="Header">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Home</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
export { propTypes as HeaderPropTypes, defaultProps as HeaderDefaultProps };
