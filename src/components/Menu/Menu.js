import React from "react";
import PropTypes from "prop-types";

import MenuHorizontal from "../MenuHorizontal";
import MenuVertical from "../MenuVertical";

import useMediaQuery from "@material-ui/core/useMediaQuery";

/**
 * Defines the prop types
 */
const propTypes = {
  items: PropTypes.arrayOf(PropTypes.string)
};

/**
 * Defines the default props
 */
const defaultProps = {
  items: [
    "Item one",
    "Item two",
    "Item three",
    "Item four",
    "Item five",
    "Item six",
    "Item seven, the last one"
  ]
};

/**
 * Displays the component
 */
const Menu = props => {
  const { items } = props;
  const isPortrait = useMediaQuery("(orientation: portrait)");

  return isPortrait ? (
    <MenuVertical items={items} />
  ) : (
    <MenuHorizontal items={items} />
  );
};

Menu.propTypes = propTypes;
Menu.defaultProps = defaultProps;

export default Menu;
export { propTypes as MenuPropTypes, defaultProps as MenuDefaultProps };
