import React from "react";
import PropTypes from "prop-types";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

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
  return (
    <Card className="Uncontrolled">
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Uncontrolled forms
        </Typography>
        <Typography variant="body2" color="textSecondary" component="div">
          <p>Form inputs are controlled by something else than React.</p>
          <p>
            Usually by the DOM itself or a third party library like Formik or
            React Hook Forms.
          </p>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
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
