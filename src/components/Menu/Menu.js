import React from "react";
import PropTypes from "prop-types";

import MenuHorizontal from "../MenuHorizontal";
import MenuVertical from "../MenuVertical";

import useMediaQuery from "@material-ui/core/useMediaQuery";

/**
 * Defines the prop types
 */
const propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
  currentPage: PropTypes.string
};

/**
 * Defines the default props
 */
const defaultProps = {
  items: [
    "Home",
    "Forms",
    "Item three",
    "Item four",
    "Item five",
    "Item six",
    "Item seven, the last one"
  ],
  currentPage: "Home"
};

/**
 * Displays the component
 */
const Menu = props => {
  const isPortrait = useMediaQuery("(orientation: portrait)");

  return isPortrait ? (
    <MenuVertical {...props} />
  ) : (
    <MenuHorizontal {...props} />
  );
};

Menu.propTypes = propTypes;
Menu.defaultProps = defaultProps;

export default Menu;
export { propTypes as MenuPropTypes, defaultProps as MenuDefaultProps };
