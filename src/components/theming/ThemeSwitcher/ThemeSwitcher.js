import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { useThemeSwitcher } from "../../../hooks";

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
  const { themeID, setThemeID } = useThemeSwitcher();

  const [switched, setSwitched] = useState(themeID === "light");

  const handleChange = event => {
    setSwitched(event.target.checked);
  };

  useEffect(() => {
    setThemeID(switched ? "dark" : "light");
  }, [switched]);

  return (
    <Card>
      <CardContent>
        <Typography variant="h4">Theme switcher</Typography>
        <Typography variant="body1" component="div">
          <ul>
            <li>Switches between light and dark themes.</li>
          </ul>
        </Typography>
        <Grid component="label" container alignItems="center" spacing={1}>
          <Grid item>Light</Grid>
          <Grid item>
            <Switch checked={switched} onChange={handleChange} />
          </Grid>
          <Grid item>Dark</Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
          href="https://github.com/metamn/react-mui/blob/master/src/hooks/usePrefersDarkMode/usePrefersDarkMode.js"
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
