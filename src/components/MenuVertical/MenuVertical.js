import React, { useState } from "react";
import PropTypes from "prop-types";
import shortid from "shortid";

import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import Grid from "@material-ui/core/Grid";
import { useTheme, makeStyles } from "@material-ui/core/styles";

/**
 * Defines the prop types
 */
const propTypes = {};

/**
 * Defines the default props
 */
const defaultProps = {};

/**
 * Styles the component
 */
const useStyles = makeStyles(theme => ({
  container: {
    minHeight: theme.mixins.toolbar["@media (min-width:600px)"].minHeight
  }
}));

/**
 * Displays the component
 */
const MenuVertical = props => {
  const { items } = props;

  const theme = useTheme();
  const classes = useStyles(theme);

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
      <Drawer anchor="right" open={open}>
        <Grid
          container
          justify="flex-end"
          alignItems="center"
          className={classes.container}
        >
          <IconButton onClick={handleDrawerClose}>
            <CloseIcon />
          </IconButton>
        </Grid>
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
