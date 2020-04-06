import React from "react";
import PropTypes from "prop-types";
import shortid from "shortid";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

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
const MenuHorizontal = props => {
  const { items, currentPage } = props;

  const tabs = items.map(item => <Tab key={shortid.generate()} label={item} />);
  const value = items.findIndex(item => item === currentPage);

  return (
    <Tabs
      className="MenuHorizontal"
      value={value}
      variant="scrollable"
      scrollButtons="on"
    >
      {tabs}
    </Tabs>
  );
};

MenuHorizontal.propTypes = propTypes;
MenuHorizontal.defaultProps = defaultProps;

export default MenuHorizontal;
export {
  propTypes as MenuHorizontalPropTypes,
  defaultProps as MenuHorizontalDefaultProps
};
