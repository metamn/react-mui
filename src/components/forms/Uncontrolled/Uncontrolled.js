import React from "react";
import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

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
const Uncontrolled = props => {
  const { url } = props;

  return (
    <Card className="Uncontrolled">
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          <Link component={RouterLink} to={`${url}/uncontrolled`}>
            Uncontrolled forms
          </Link>
        </Typography>
        <Typography variant="body2" color="textSecondary" component="div">
          <p>Form inputs are controlled by something else than React.</p>
          <p>
            Usually by the DOM itself or a third party library like Formik or
            React Hook Forms.
          </p>
        </Typography>
      </CardContent>
    </Card>
  );
};

Uncontrolled.propTypes = propTypes;
Uncontrolled.defaultProps = defaultProps;

export default Uncontrolled;
export {
  propTypes as UncontrolledPropTypes,
  defaultProps as UncontrolledDefaultProps
};
