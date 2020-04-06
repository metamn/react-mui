# react-mui

Playing with React and Material UI.

## Summary

### 1. Use as less MUI components as possible

- For content, Grid and Card should be well enough
- For special elements like Navigation, Forms you'll find the examples here. (Or ask if they are missing)

MUI is the most popular Design System out there. Yet it has to be used with care.

Component functionality might easily overlap; the layout can be easily broken; code can become more complicated than necessary; and so on.

A minimalist approach can reduce all above problems and offer a _best practices_ approach like we have for React.

### 2. Don't write CSS by hand

- Use `makeStyles` only when adding responsiveness

Design Systems are meant to replace HTML and CSS written by hand. If your code code contains handwritten CSS then it should be refactored until all CSS code is simplified down to responsiveness.

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

- Pages have to be wrapped into a <Container/>
- ~~A Container can act also as a <Grid container />~~ but can't have its `spacing` set.
- https://spectrum.chat/material-ui/help/grid-vs-box-and-now-vs-container~73cef09f-1eb9-4d0f-a3a3-d46c44232524
- https://material-ui.com/components/container/

```js
<Container className="Home" maxWidth={false}>
```

### Grid

- Grids are defining the page layout. Their usage is mandatory.
- Every element on the page has to be wrapped into `<Grid item>` component.
- Grid items (even a single one) has to be wrapped into a `<Grid container>` component.
- Spacing is set up once at container level. There is no spacing set at item level.

```js
<Grid container className="Hero" spacing={1}>
  <Grid item xs={12}>
	<Card className={classes.card}>
	...
  </Grid>
</Grid>
```

- The grid is set up in the current component following the single responsibility principle.
- In this example Header, Hero, Features are all aligned to the grid whatever their own component structure is

```js
<Grid container spacing={1}>
  <Grid item xs={12}>
    <Header />
  </Grid>
  <Grid item xs={12}>
    <Hero />
  </Grid>
  <Grid item xs={12}>
    <Features />
  </Grid>
</Grid>
```

### Content

- There are many types of elements displayed on a page: content, navigation, input, notification, decoration and so.
- Content elements are anything information: articles, descriptions, product plans, list of products, etc.
- Content elements should be all Cards whenever possible.
- Simple data display components (Avatar, Typography, List, Table etc ...) shouldn't be thrown inside a grid. They will break the positioning. Instead these elements should be wrapped into a content (Card) element.

```js
<Grid container className="Features" spacing={3}>
  <Grid item xs={12}>
    {/*
		When a Typography is just thrown there the grid will be broken
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
    {items}
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
      ...

      [theme.breakpoints.down("lg")]: {
        ...
      },

      [theme.breakpoints.down("md")]: {
        ...
      }
    }
  }
}));
```

##### `react-responsive`

- https://github.com/contra/react-responsive
- https://github.com/metamn/react-mui/blob/master/src/hooks/useMedia/useMedia.js

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

```js
const isPortrait = useMediaQuery("(orientation: portrait)");
```

## Examples in this current project

### Header / AppBar

- https://material-ui.com/components/app-bar/
- Outside Material UI it's called Header
- Material UI calls it AppBar
- Let's be general and have a Header component featuring an AppBar
- AppBar it's just a container of the `<header>` type. It needs to be filled with a Toolbar
- AppBar position by default is `fixed` which is cumbersome. Let's change it to `static` or `relative`

```js
<AppBar className="Header" position="static">
  <Toolbar>...</Toolbar>
</AppBar>
```

### Toolbar

- Toolbar is just a colored bar. It needs to be filled with a Menu, Search, Icons, Site title etc ...

### Menu

- In portrait mode: hamburger menu / Drawer
- In landscape mode: Tabs, with scrolling tab headers on large number of menu items

### Hero

- It's the first _slide_ describing the product / service with a headline, a short description and an image. And usually offers a call to action button.
- So it's ... a Card component

### Features

- It's a list of components ... so Grid has to be used
- Components resemble the features of a Card (title, description, call to action) ... so they are Card components
