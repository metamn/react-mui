import React, { useContext } from "react";
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
 * Defines the Finster theme
 *
 * - From XD https://xd.adobe.com/view/d7d7ce14-cfbb-44b8-68d8-c6d686c2b4fd-a1e6/screen/04350c22-6db1-4f6f-b693-f3c3e8748cff/Web-1920-7/
 *
 * - In the MUI color tool: https://material.io/resources/color/#!/?view.left=1&view.right=1&primary.color=FA9140&secondary.color=FA9140&primary.text.color=ffffff&secondary.text.color=ffffff
 *
 * Problems with the design:
 *
 * 1. There is no secondary color
 * 2. White on primary is not legible. Trying to set on bold + increase letter spacing to increase legibility.
 */
const finsterTheme = {
  palette: {
    secondary: {
      main: "#FA9140",
      contrastText: "#ffffff"
    },
    primary: {
      main: "#FA9140",
      contrastText: "#ffffff"
    }
  },
  typography: {
    button: {
      fontWeight: "bold",
      letterSpacing: "0.05em" // It was 0.01071em
    }
  }
};

/**
 * Displays the component
 */
const Finster = props => {
  const theme = useTheme();
  console.log("theme:", theme);

  const { switchTheme } = useContext(ThemeContext);

  const handleClick = () => {
    switchTheme("finster");
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h4">The Finster theme</Typography>
        <Typography variant="body1" component="div">
          <ul>
            <li>Creating a custom theme for Finster.</li>
            <li>
              Based on a few design tokens coming from{" "}
              <Link to="https://xd.adobe.com/view/d7d7ce14-cfbb-44b8-68d8-c6d686c2b4fd-a1e6/screen/04350c22-6db1-4f6f-b693-f3c3e8748cff/Web-1920-7/">
                Adobe XD
              </Link>
              .
            </li>
          </ul>
        </Typography>
        <Grid component="label" container alignItems="center" spacing={1}>
          <Button color="primary" variant="outlined" onClick={handleClick}>
            Switch to Finster Theme
          </Button>
        </Grid>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
          href="https://github.com/metamn/react-mui/blob/master/src/components/theming/Finster/Finster.js"
        >
          See code
        </Button>
      </CardActions>
    </Card>
  );
};

Finster.propTypes = propTypes;
Finster.defaultProps = defaultProps;

export default Finster;
export {
  propTypes as FinsterPropTypes,
  defaultProps as FinsterDefaultProps,
  finsterTheme
};
