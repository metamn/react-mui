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
const Controlled = props => {
  return (
    <Card className="Controlled">
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Controlled forms
        </Typography>
        <Typography variant="body2" color="textSecondary" component="div">
          <p>
            React holds the state of the form inputs and controls their change.
          </p>
          <p>It's the recommended way to deal with forms.</p>
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

Controlled.propTypes = propTypes;
Controlled.defaultProps = defaultProps;

export default Controlled;
export {
  propTypes as ControlledPropTypes,
  defaultProps as ControlledDefaultProps
};
