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

import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";

/**
 * Defines the prop types
 */
const propTypes = {};

/**
 * Defines the default props
 */
const defaultProps = {};

/**
 * Define the drawer's width
 */
const drawerWidth = 240;

/**
 * Stye the component
 */
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginRight: drawerWidth
  },
  title: {
    flexGrow: 1
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-start"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginRight: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginRight: 0
  }
}));

/**
 * Displays the component
 */
const MenuVertical = props => {
  const { items } = props;

  const classes = useStyles();
  const theme = useTheme();

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const list = items.map(item => (
    <ListItem button key={shortid.generate()}>
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
