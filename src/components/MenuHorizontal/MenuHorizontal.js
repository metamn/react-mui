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
  const { items } = props;
  const tabs = items.map(item => <Tab key={shortid.generate()} label={item} />);

  return (
    <Tabs
      className="MenuHorizontal"
      value={false}
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
