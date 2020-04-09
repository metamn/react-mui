import React, { useState, useEffect } from "react";
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
const TextField = props => {
  const [value, setValue] = useState("");
  const [log, setLog] = useState("");

  const handleChange = event => {
    setValue(event.target.value);
  };

  useEffect(() => {
    if (value) {
      setLog(previousValue => previousValue + `${value} — `);
    }
  }, [value]);

  return (
    <Card className="TextField">
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Text Field
        </Typography>

        <Grid container spacing={5}>
          <Grid item xs={12}>
            <Typography variant="body1" component="div">
              <ul>
                <li>Simple version, without throttling.</li>
                <li>
                  On every keypress the state and the keystroke log is updated.
                </li>
              </ul>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" color="textSecondary" component="div">
              <FormControl fullWidth>
                <MUITextField
                  label="Please enter text"
                  value={value}
                  onChange={handleChange}
                />
              </FormControl>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" spacing={1}>
              Keystroke log:
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Box border={1} borderColor="text.secondary" padding={2}>
              {log}
            </Box>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
          href="https://github.com/metamn/react-mui/blob/master/src/components/forms/TextField/TextField.js"
        >
          See code
        </Button>
      </CardActions>
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
