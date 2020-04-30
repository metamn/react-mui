import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";

import { ThemeContext } from "../../../App";
import { useTheme } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Switch from "@material-ui/core/Switch";
import Grid from "@material-ui/core/Grid";

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
const ThemeSwitcher = props => {
  const theme = useTheme();
  const { palette } = theme;
  const { type: themeName } = palette;
  const checked = themeName === "dark";

  const { switchTheme } = useContext(ThemeContext);

  const handleChange = event => {
    const themeID = event.target.checked ? "dark" : "light";
    switchTheme(themeID);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h4">Theme switcher</Typography>
        <Typography variant="body1" component="div">
          <ul>
            <li>Switches between light and dark themes.</li>
            <li>
              Saves the theme preference into the browser's local storage.
            </li>
          </ul>
        </Typography>
        <Grid component="label" container alignItems="center" spacing={1}>
          <Grid item>Light</Grid>
          <Grid item>
            <Switch checked={checked} onChange={handleChange} />
          </Grid>
          <Grid item>Dark</Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
          href="https://github.com/metamn/react-mui/blob/master/src/components/theming/ThemeSwitcher/ThemeSwitcher.js"
        >
          See code
        </Button>
      </CardActions>
    </Card>
  );
};

ThemeSwitcher.propTypes = propTypes;
ThemeSwitcher.defaultProps = defaultProps;

export default ThemeSwitcher;
export {
  propTypes as ThemeSwitcherPropTypes,
  defaultProps as ThemeSwitcherDefaultProps
};
