import React from "react";
import PropTypes from "prop-types";

import Image from "material-ui-image";
import logo from "./logo192.png";

import Grid from "@material-ui/core/Grid";
import { useTheme } from "@material-ui/core/styles";

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
const Logo = props => {
  const theme = useTheme();

  /**
   * Can't style using `makeStyles` (all values will be overwritten)
   */
  const style = {
    width: theme.mixins.toolbar.minHeight / 1.5,
    height: theme.mixins.toolbar.minHeight / 1.5,
    backgroundColor: "transparent"
  };

  return (
    <Grid item className="Logo">
      <Image src={logo} alt="Logo" style={style} />
    </Grid>
  );
};

Logo.propTypes = propTypes;
Logo.defaultProps = defaultProps;

export default Logo;
export { propTypes as LogoPropTypes, defaultProps as LogoDefaultProps };
