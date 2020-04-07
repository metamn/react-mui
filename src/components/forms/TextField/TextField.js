import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { TextField as MUITextField } from "@material-ui/core/";

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
const TextField = props => {
  const [value, setValue] = useState("");
  const [log, setLog] = useState("");

  const handleChange = event => {
    setValue(event.target.value);
  };

  useEffect(() => {
    if (value) {
      setLog(previousValue => previousValue + `${value} \u000D \u000A`);
    }
  }, [value]);

  return (
    <Card className="TextField">
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Text Field
        </Typography>
        <Typography variant="body2" color="textSecondary" component="div">
          <MUITextField
            label="Standard"
            value={value}
            onChange={handleChange}
          />
        </Typography>
        <Typography variant="body2">
          <p>Log:</p>
          <p>{log}</p>
        </Typography>
      </CardContent>
    </Card>
  );
};

TextField.propTypes = propTypes;
TextField.defaultProps = defaultProps;

export default TextField;
export {
  propTypes as TextFieldPropTypes,
  defaultProps as TextFieldDefaultProps
};
