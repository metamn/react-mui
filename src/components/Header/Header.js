import React from "react";
import PropTypes from "prop-types";

import { Media } from "./../../hooks";

import Logo from "../Logo";
import Menu from "../Menu";

import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

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
const useStyles = makeStyles({
  container: {
    [`${Media.portrait}`]: {
      justifyContent: "space-between"
    }
  },
  title: {
    [`${Media.portrait}`]: {
      display: "flex",
      justifyContent: "center"
    }
  },
  pageTitle: {
    [`${Media.landscape}`]: {
      display: "none"
    }
  }
});

/**
 * Displays the component
 */
const Header = props => {
  const { currentPage } = props;
  const classes = useStyles();

  return (
    <AppBar className="Header" position="static">
      <Toolbar>
        <Grid
          container
          spacing={1}
          alignItems="center"
          wrap="nowrap"
          className={classes.container}
        >
          <Grid item>
            <Logo />
          </Grid>
          <Grid item className={classes.title}>
            <Typography variant="h6">MUI</Typography>
            <Typography variant="h6" className={classes.pageTitle}>
              &nbsp;&mdash;&nbsp;{currentPage}
            </Typography>
          </Grid>
          {/*
			  When wrapped into a Grid item the horizontal menu's autoscroller gets broken
			  <Grid item>
	            <Menu/>
	          </Grid>
		  */}
          <Menu currentPage={currentPage} />
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
export { propTypes as HeaderPropTypes, defaultProps as HeaderDefaultProps };
