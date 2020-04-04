import React from "react";
import PropTypes from "prop-types";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

/**
 * Defines the prop types
 */
const propTypes = {};

/**
 * Defines the default props
 */
const defaultProps = {};

/**
 * Styles the component
 */
const useStyles = makeStyles({
  card: {
    border: "none",
    backgroundColor: "transparent"
  },
  cardContent: {
    paddingBottom: "0 !important"
  }
});

/**
 * Displays a single item
 */
const Item = props => {
  const { title } = props;

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className="Card">
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <p>A short description goes here.</p>
            <p>
              Preferably 1-2 sentences only which are precise and straight to
              the point
            </p>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

/**
 * Displays the component
 */
const Features = props => {
  const classes = useStyles();

  const range = [...Array(6).keys()];
  const items = range.map(item => <Item title={`Feature ${item + 1}`} />);

  return (
    <Grid container className="Features" spacing={3}>
      <Grid item xs={12}>
        {/*
			When a Typography is just thrown there the grid is broken
			<Typography variant="h6" component="h3">
			  Features
			</Typography>
		*/}
        <Card
          className={classes.card}
          elevation={0}
          square={true}
          variant="outlined"
        >
          <CardContent className={classes.cardContent}>
            <Typography variant="h6" component="h3">
              Features
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      {items}
    </Grid>
  );
};

Features.propTypes = propTypes;
Features.defaultProps = defaultProps;

export default Features;
export { propTypes as FeaturesPropTypes, defaultProps as FeaturesDefaultProps };
