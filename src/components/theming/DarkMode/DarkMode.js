import React from "react";
import PropTypes from "prop-types";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

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
const DarkMode = props => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h4">Dark mode</Typography>
        <Typography variant="body1" component="div">
          <ul>
            <li>
              If the user prefers dark mode then the dark theme is displayed by
              default.
            </li>
          </ul>
        </Typography>
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

DarkMode.propTypes = propTypes;
DarkMode.defaultProps = defaultProps;

export default DarkMode;
export { propTypes as DarkModePropTypes, defaultProps as DarkModeDefaultProps };
