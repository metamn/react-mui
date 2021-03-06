import React, { useState } from "react";
import PropTypes from "prop-types";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

import FormControl from "@material-ui/core/FormControl";
/**
 * Check package.json for the right packages
 * - The default install won't work
 */
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import Chip from "@material-ui/core/Chip";

/**
 * Defines the prop types
 */
const propTypes = {
  values: PropTypes.arrayOf(PropTypes.string),
  selected: PropTypes.arrayOf(PropTypes.string)
};

/**
 * Defines the default props
 *
 * - From https://onlinerandomtools.com/generate-random-json
 */
const defaultProps = {
  values: [
    "pull",
    "conversation",
    "cloud",
    "grabbed",
    "ruler",
    "author",
    "me",
    "ate",
    "volume",
    "throughout",
    "wet",
    "greatly",
    "foot",
    "moment",
    "throw",
    "compass",
    "gone",
    "solar",
    "visit",
    "indeed",
    "it",
    "slightly",
    "send",
    "purpose",
    "he",
    "strong",
    "goes",
    "trail",
    "shown",
    "finally",
    "air",
    "couple",
    "funny",
    "do",
    "try",
    "three",
    "structure",
    "taught",
    "quite",
    "worried",
    "eat",
    "company",
    "street",
    "kind",
    "notice",
    "dig",
    "dirt",
    "spider",
    "cover",
    "cry",
    "method",
    "race",
    "statement",
    "hunt",
    "structure",
    "electric",
    "slave",
    "television",
    "darkness",
    "for",
    "belt",
    "tax",
    "captured",
    "could",
    "father",
    "ten",
    "look",
    "feed",
    "eaten",
    "all",
    "nature",
    "shorter",
    "might",
    "kept",
    "hall",
    "story",
    "zoo",
    "finger",
    "peace",
    "volume",
    "wrong",
    "post",
    "stage",
    "cut",
    "tail",
    "small",
    "shinning",
    "hurry",
    "hair",
    "has",
    "escape",
    "start",
    "short",
    "goes",
    "frighten",
    "announced",
    "walk",
    "eat",
    "discuss",
    "diagram",
    "but",
    "excitement",
    "function",
    "ran",
    "as",
    "brass",
    "coffee",
    "bring",
    "instant",
    "clear",
    "include",
    "piano",
    "simplest",
    "shall",
    "calm",
    "command",
    "around",
    "recall",
    "together",
    "realize",
    "familiar",
    "curious",
    "greatest",
    "bridge",
    "stopped",
    "situation",
    "burn",
    "coach",
    "equal",
    "strike",
    "definition",
    "basic",
    "object",
    "reach",
    "tool",
    "paper",
    "grandfather",
    "atom",
    "party",
    "camera",
    "eleven",
    "measure",
    "team",
    "favorite",
    "closer",
    "settlers",
    "sudden",
    "allow",
    "earth",
    "pound",
    "garage",
    "stay",
    "able",
    "push",
    "middle",
    "score",
    "plural",
    "twenty",
    "rocky",
    "attempt"
  ],
  selected: []
};

/**
 * Styles the component
 */
const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
    width: "100%",
    "& .MuiChip-root": {
      margin: 2,
      padding: 4,
      // Wrap long text
      height: "auto",
      "& .MuiChip-label": {
        overflowWrap: "break-word",
        whiteSpace: "normal",
        lineHeight: "1"
      }
    }
  }
}));

/**
 * Displays the component
 */
const SelectMultipleAutocomplete = props => {
  const { values, selected: defaultSelected } = props;

  const classes = useStyles();

  const [selected, setSelected] = useState(defaultSelected);

  /**
   * Handles the select change
   */
  const selectHandler = (event, value) => {
    const values = value.map(item => item);
    const lastValue = values.pop();
    const bugFixedValues = [...selected, lastValue];

    setSelected(bugFixedValues);
  };

  return (
    <Card className="SelectMultipleAutocomplete">
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Select Multiple Autocomplete
        </Typography>

        <Grid container spacing={5}>
          <Grid item xs={12}>
            <Typography variant="body1" component="div">
              <ul>
                <li>Start typing for autocomplete.</li>
                <li>On every select the state is updated.</li>
              </ul>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <FormControl className={classes.formControl}>
              <Autocomplete
                multiple
                filterSelectedOptions
                options={values}
                onChange={selectHandler}
                closeIcon={null}
                renderInput={params => (
                  <TextField
                    {...params}
                    variant="standard"
                    label="Select multiple items."
                  />
                )}
                renderTags={() => (
                  <div className={classes.chips}>
                    {selected.map(value => (
                      <Chip
                        size="small"
                        key={value}
                        label={value}
                        className={classes.chip}
                        onDelete={() => {
                          setSelected(selected.filter(item => item !== value));
                        }}
                      />
                    ))}
                  </div>
                )}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" spacing={1}>
              State:
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Box border={1} borderColor="text.secondary" padding={2}>
              {JSON.stringify(selected)}
            </Box>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
          href="https://github.com/metamn/react-mui/blob/master/src/components/forms/SelectMultipleAutocomplete/SelectMultipleAutocomplete.js"
        >
          See code
        </Button>
      </CardActions>
    </Card>
  );
};

SelectMultipleAutocomplete.propTypes = propTypes;
SelectMultipleAutocomplete.defaultProps = defaultProps;

export default SelectMultipleAutocomplete;
export {
  propTypes as SelectMultipleAutocompletePropTypes,
  defaultProps as SelectMultipleAutocompleteDefaultProps
};
