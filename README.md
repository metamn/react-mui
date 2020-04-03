# react-mui

Playing with React and Material UI.

## General guidelines

### Set up

- https://material-ui.com/components/css-baseline/

```js
<>
  <CssBaseline />
  <Home />
</>
```

### Page containers

- https://spectrum.chat/material-ui/help/grid-vs-box-and-now-vs-container~73cef09f-1eb9-4d0f-a3a3-d46c44232524
- https://material-ui.com/components/container/

```js
<Container className="Home" maxWidth={false}>
```

### Header / AppBar

- Outside Material UI it's called Header
- Material UI it calls AppBar
- Let's be general and have a Header containing an AppBar

#### AppBar

- https://material-ui.com/components/app-bar/
- AppBar it's just a container of the `<header>` type. It needs to be filled with a Toolbar
- AppBar position by default is `fixed` which is cumbersome. Let's change it to `static` or `relative`

```js
<div className="Header">
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6">Home</Typography>
    </Toolbar>
  </AppBar>
</div>
```

#### Toolbar

- Toolbar is just a colored bar. It needs to be filled with a Menu, Search, Icons, Site title etc ...

### Grid

- Every content element has to be wrapped into `<Grid item>` component.
- Grid items (even a single one) has to be wrapped into a `<Grid container>` component

```js
<Grid container className="Hero">
  <Grid item xs={12}>
	<Card className={classes.card}>
	...
  </Grid>
</Grid>
```

### Content

- Content elements should be placed inside a grid item.
- Content elements should be all Cards whenever possible.
- Data display components (Avatar, Typography, List, etc ...) shouldn't be thrown inside a grid. It will break the positioning. Instead these should be wrapped into a content element.

```js
<Grid container className="Features" spacing={3}>
  <Grid item xs={12}>
    {/*
		When a Typography is just thrown there the grid is broken
		<Typography variant="h6" component="h3">
		  Features
		</Typography>
	*/}
    <Card>
      <CardContent>
        <Typography variant="h6" component="h3">
          Features
        </Typography>
      </CardContent>
    </Card>
  </Grid>
</Grid>
```

### Responsiveness

#### Inside `makeStyles`

##### `theme.breakpoints`

- https://material-ui.com/customization/default-theme/#default-theme
- Quite limited (like has no `portrait` or `landscape` options)

```js
const useStyles = makeStyles(theme => ({
  dashboard: {
    "& .dashboardContentContainer": {
      paddingLeft: theme.spacing(20),
      paddingRight: theme.spacing(20),
      overflow: "hidden",

      [theme.breakpoints.down("lg")]: {
        paddingLeft: theme.spacing(10),
        paddingRight: theme.spacing(10)
      },
      [theme.breakpoints.down("md")]: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2)
      }
    }
  }
}));
```

##### `react-responsive`

- https://github.com/contra/react-responsive
- src/hooks/useMedia/useMedia.js

```js
const useStyles = makeStyles(theme => ({
  card: {
    display: "flex",

    [`${Media.portrait}`]: {
      flexDirection: "column"
    },

    [`${Media.landscape}`]: {
      alignItems: "center"
    }
  },
  media: {
    width: 512,
    height: 512,

    [`${Media.landscape}`]: {
      order: 2
    }
  }
}));
```

#### Outside `makeStyles`

- MUI's own https://material-ui.com/components/use-media-query/#usemediaquery

## Examples in this current project

### Hero

- It's the first _slide_ describing the product / service with a headline, a short description and an image. And usually offers a call to action button.
- So it's ... a Card component

### Features

- It's a list of components ... so Grid has to be used
- Components resemble the features of a Card ... so they are Card components
