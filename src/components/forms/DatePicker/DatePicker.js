import React, { useState } from "react";
import PropTypes from "prop-types";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

/**
 * Check package.json for the required packages.
 * - The installation instructions aren't working at this momemnt
 */
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

/**
 * Defines the prop types
 */
const propTypes = {
  defaultValue: PropTypes.instanceOf(Date)
};

/**
 * Defines the default props
 */
const defaultProps = {
  defaultValue: new Date()
};

/**
 * Displays the component
 */
const DatePicker = props => {
  const { defaultValue } = props;

  const [date, setDate] = useState(defaultValue);

  /**
   * Handles the input change
   */
  const inputHandler = date => {
    setDate(date);
  };

  return (
    <Card className="DatePicker">
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          DatePicker
        </Typography>

        <Grid container spacing={5}>
          <Grid item xs={12}>
            <Typography variant="body1">
              <ul>
                <li>After every pick the state is updated.</li>
              </ul>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" color="textSecondary" component="div">
              <FormControl>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MMMM d, yyyy" // TODO: can't get localization to work here ....
                    margin="normal"
                    name="date"
                    label="Please select a date"
                    value={date}
                    onChange={inputHandler}
                    KeyboardButtonProps={{
                      "aria-label": "change defaultValue"
                    }}
                  />
                </MuiPickersUtilsProvider>
              </FormControl>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" spacing={1}>
              State:
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Box border={1} borderColor="text.secondary" padding={2}>
              {JSON.stringify(date)}
            </Box>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
          href="https://github.com/metamn/react-mui/blob/master/src/components/forms/DatePicker/DatePicker.js"
        >
          See code
        </Button>
        <Button
          size="small"
          color="primary"
          href="https://material-ui-pickers.dev/"
        >
          See the library
        </Button>
      </CardActions>
    </Card>
  );
};

DatePicker.propTypes = propTypes;
DatePicker.defaultProps = defaultProps;

export default DatePicker;
export {
  propTypes as DatePickerPropTypes,
  defaultProps as DatePickerDefaultProps
};
