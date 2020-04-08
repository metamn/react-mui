import React, { useState, useRef } from "react";
import PropTypes from "prop-types";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
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
const TextFieldUncontrolled = props => {
  /**
   * Sets up state
   */
  const [name, setName] = useState("");

  /**
   * Declares a ref to be able to access the input text value
   */
  const inputTextRef = useRef(null);

  /**
   * Handles the name change click
   */
  const handleClick = () => {
    const value = inputTextRef.current.value;
    setName(value);
  };

  return (
    <Card className="TextFieldUncontrolled">
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Uncontrolled Text Field
        </Typography>

        <Grid container spacing={5}>
          <Grid item xs={12}>
            <Typography variant="body1" component="div">
              <ul>
                <li>
                  The state of the input is updated when the button is clicked.
                </li>
              </ul>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" color="textSecondary" component="div">
              <FormControl fullWidth>
                <MUITextField
                  label="Please enter text"
                  defaultValue="Your text ..."
                  inputRef={inputTextRef}
                />
              </FormControl>
              <p>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => handleClick()}
                >
                  Set state
                </Button>
              </p>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" spacing={1}>
              State:
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Box border={1} borderColor="text.secondary" padding={2}>
              {name}
            </Box>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
          href="https://github.com/metamn/react-mui/blob/master/src/components/forms/TextFieldUncontrolled/TextFieldUncontrolled.js"
        >
          See code
        </Button>
      </CardActions>
    </Card>
  );
};

TextFieldUncontrolled.propTypes = propTypes;
TextFieldUncontrolled.defaultProps = defaultProps;

export default TextFieldUncontrolled;
export {
  propTypes as TextFieldUncontrolledPropTypes,
  defaultProps as TextFieldUncontrolledDefaultProps
};
