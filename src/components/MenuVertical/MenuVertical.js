import React, { useState } from "react";
import PropTypes from "prop-types";
import shortid from "shortid";

import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

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
const MenuVertical = props => {
  const { items } = props;

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const list = items.map(item => (
    <ListItem key={shortid.generate()}>
      <ListItemText primary={item} />
    </ListItem>
  ));

  return (
    <>
      <IconButton edge="end" color="inherit" onClick={handleDrawerOpen}>
        <MenuIcon />
      </IconButton>
      <Drawer variant="persistent" anchor="right" open={open}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronRightIcon />
        </IconButton>
        <List>{list}</List>
      </Drawer>
    </>
  );
};

MenuVertical.propTypes = propTypes;
MenuVertical.defaultProps = defaultProps;

export default MenuVertical;
export {
  propTypes as MenuVerticalPropTypes,
  defaultProps as MenuVerticalDefaultProps
};
