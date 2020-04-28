import React from "react";
import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";

import Header from "../../Header";
import Breadcrumbs from "../../Breadcrumbs";

import CardWithMedia, {
  CardWithMediaPropTypes,
  CardWithMediaDefaultProps
} from "../../CardWithMedia";

import hero from "./hero.png";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";

/**
 * Defines the prop types
 */
const propTypes = {
  card: PropTypes.shape(CardWithMediaPropTypes)
};

/**
 * Defines the default props
 */
const defaultProps = {
  card: CardWithMediaDefaultProps
};

/**
 * Styles the component
 */
const useStyles = makeStyles(theme => ({
  cardMedia: {
    width: "100vw",
    height: "calc(100vw / 1.83)", // aspectRatio={1494 / 814 = 1.83}

    [theme.breakpoints.up("lg")]: {
      width: "76vw",
      height: "calc(76vw / 1.83)"
    },

    [theme.breakpoints.up("xl")]: {
      width: "66vw",
      height: "calc(66vw / 1.83)"
    }
  },

  cardActions: {
    /**
     * Could not make spacing work with the MUI API: https://material-ui.com/api/card-actions/#cardactions-api
     */
    marginLeft: theme.spacing(1)
  }
}));

/**
 * Displays the component as a Card
 */
const HeroAsCard = props => {
  const { url } = props;

  return (
    <Card className="HeroAsCard">
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          <Link component={RouterLink} to={`${url}/hero`}>
            Hero
          </Link>
        </Typography>
        <Typography variant="body2" color="textSecondary" component="div">
          <p>A common element containing an image, text and call for action.</p>
          <p>
            See{" "}
            <Link href="https://www.quora.com/What-is-the-definition-of-a-hero-element-in-UI-design">
              What is the definition of a hero element in UI design?
            </Link>
          </p>
        </Typography>
      </CardContent>
    </Card>
  );
};

/**
 * Displays the component
 */
const Hero = props => {
  const { card } = props;

  const classes = useStyles();

  const cardContent = (
    <>
      <Typography gutterBottom variant="h4">
        Malesuada pellentesque
      </Typography>
      <Typography gutterBottom variant="h5">
        Lacus maecenas nisl
      </Typography>
      <Typography variant="subtitle1">
        Nulla eleifend pulvinar purus, molestie euismod odio imperdiet ac. Ut
        sit amet erat nec nibrhoncus varius in non lorem. Donec interdum, lectus
        in convallis pulvinar, enim elit porta sapien,vel finibus erat felis sed
        neque.
      </Typography>
    </>
  );

  const cardActions = (
    <>
      <Button variant="contained" size="large" href="#">
        View the app
      </Button>
    </>
  );

  const cardWithMedia = {
    image: hero,
    imageTitle: "Hero image",
    content: cardContent,
    actions: cardActions,
    klasses: classes
  };

  return (
    <Container className="Hero" maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Header currentPage="Cards" />
        </Grid>
        <Grid item xs={12}>
          <Breadcrumbs />
        </Grid>
        <Grid item xs={12}>
          <CardWithMedia {...cardWithMedia} />
        </Grid>
      </Grid>
    </Container>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
export {
  propTypes as HeroPropTypes,
  defaultProps as HeroDefaultProps,
  HeroAsCard
};
