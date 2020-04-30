import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";

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
  items: ["Home", "Learn", "Cards", "Forms", "Theming"],
  currentPage: "Home"
};

/**
 * Converts a menu name to a route
 */
const convertMenuToRoute = menu => {
  return menu === "Home" ? "/" : `/${kebabCase(menu)}`;
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
export {
  propTypes as MenuPropTypes,
  defaultProps as MenuDefaultProps,
  convertMenuToRoute
};
