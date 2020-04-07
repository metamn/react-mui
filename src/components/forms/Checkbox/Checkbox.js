import React, { useState } from "react";
import PropTypes from "prop-types";
import shortid from "shortid";
import { capitalize } from "lodash";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Checkbox as MUICheckbox } from "@material-ui/core";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

/**
 * Defines the prop types
 */
const propTypes = {
  values: PropTypes.arrayOf(PropTypes.string),
  checked: PropTypes.arrayOf(PropTypes.string)
};

/**
 * Defines the default props
 */
const defaultProps = {
  values: ["phone", "website", "email", "address"],
  checked: []
};

/**
 * Styles the component
 */
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  formControl: {
    margin: theme.spacing(1)
  }
}));

/**
 * Displays the component
 */
const Checkbox = props => {
  const { values, checked: defaultChecked } = props;

  const classes = useStyles();

  /**
   * Handles the checkbox states
   */
  const [checked, setChecked] = useState(defaultChecked);

  /**
   * Handles the checkbox change
   */
  const handleChange = event => {
    event.target.checked
      ? setChecked(prevState => {
          return [...prevState, event.target.name];
        })
      : setChecked(prevState => {
          return prevState.filter(item => item !== event.target.name);
        });
  };

  /**
   * Prepares the checkboxes
   */
  const items = values.map(item => {
    const isChecked = checked.includes(item);

    return (
      <FormControlLabel
        key={shortid.generate()}
        control={
          <MUICheckbox
            checked={isChecked}
            onChange={handleChange}
            name={item}
          />
        }
        label={capitalize(item)}
      />
    );
  });

  return (
    <Card className="Checkbox">
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Checkbox
        </Typography>

        <Grid container spacing={5}>
          <Grid item xs={12}>
            <Typography variant="body1">
              <ul>
                <li>On every check the state is updated.</li>
              </ul>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" color="textSecondary" component="div">
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Please check items</FormLabel>
                <FormGroup>{items}</FormGroup>
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
              {JSON.stringify(checked)}
            </Box>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
          href="https://github.com/metamn/react-mui/blob/master/src/components/forms/Checkbox/Checkbox.js"
        >
          See code
        </Button>
      </CardActions>
    </Card>
  );
};

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

export default Checkbox;
export { propTypes as CheckboxPropTypes, defaultProps as CheckboxDefaultProps };
