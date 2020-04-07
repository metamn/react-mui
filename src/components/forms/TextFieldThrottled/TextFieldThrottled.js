import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { debounce } from "lodash";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";

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
const TextFieldThrottled = props => {
  const [value, setValue] = useState("");
  const [log, setLog] = useState("");

  /**
   * Debounces the log update
   *
   * @see https://medium.com/@rajeshnaroth/using-throttle-and-debounce-in-a-react-function-component-5489fc3461b3
   */
  const updateLogWithDebounce = useRef(
    debounce(value => {
      if (value) {
        setLog(previousValue => previousValue + `${value} — `);
      }
    }, 500)
  ).current;

  const handleChange = event => {
    setValue(event.target.value);
    updateLogWithDebounce(event.target.value);
  };

  return (
    <Card className="TextFieldThrottled">
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Text Field, Throttled
        </Typography>

        <Grid container spacing={5}>
          <Grid item xs={12}>
            <Typography variant="body1">
              <ul>
                <li>
                  Instead of every keypress the keystroke log is updated every
                  500 miliseconds.
                </li>
                <li>
                  If the keystroke log were an expensive operation like an API
                  call this throttling mechanism would reduce the number of
                  calls significantly.
                </li>
              </ul>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" color="textSecondary" component="div">
              <FormControl fullWidth>
                <TextField
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
          href="https://github.com/metamn/react-mui/blob/master/src/components/forms/TextFieldThrottled/TextFieldThrottled.js"
        >
          See code
        </Button>
        <Button
          size="small"
          color="primary"
          href="https://medium.com/@rajeshnaroth/using-throttle-and-debounce-in-a-react-function-component-5489fc3461b3"
        >
          See article
        </Button>
      </CardActions>
    </Card>
  );
};

TextFieldThrottled.propTypes = propTypes;
TextFieldThrottled.defaultProps = defaultProps;

export default TextFieldThrottled;
export {
  propTypes as TextFieldThrottledPropTypes,
  defaultProps as TextFieldThrottledDefaultProps
};
