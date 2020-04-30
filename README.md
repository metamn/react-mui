# react-mui

Playing with React and Material UI. See https://react-mui.metamn.now.sh/

## Status

This is a work in progress document. It's complete enough to take actions based on it. To use it as a loose guideline which might change slightly over time.

## Summary

### 1. Use as less MUI components as possible

MUI is the most popular Design System out there. Yet it has to be used with care.

Component functionality might easily overlap; the layout can be easily broken; code can become more complicated than necessary; and so on.

A minimalist approach can reduce all above problems and offer _best practices_:

1. For content, Grid and Card should be well enough. Try to avoid Paper, Box.
2. For non-content and _special_ elements not lited on MUI you can find a good selection of custom components here. Please add yours, too.

### 2. Don't write CSS by hand

Design Systems are meant to replace HTML and CSS written by hand. If your code code contains handwritten CSS then it should be refactored until all CSS code is simplified down to responsiveness.

It's rather adjust the Design System once (globally, by customizing the theme) than overwrite it many times (locally, by adding custom CSS - exceptions - in components).

Use `makeStyles` only when adding:

1. Responsiveness
2. Missing API styling (like Card background color)
3. Image sizing
4. Implement non-MUI specific design elements (like background images, transparent header, etc.)
5. Adjust spacing. (See a later chapter about MUIs improper grid technology)

## Guidelines

### Set up / CSS Reset

- https://material-ui.com/components/css-baseline/

```js
<>
  <CssBaseline />
  <Home />
</>
```

### Page containers

- Pages have to be wrapped into a Container
- ~~A Container can act also as a Grid container~~ but can't have its `spacing` set.
- https://spectrum.chat/material-ui/help/grid-vs-box-and-now-vs-container~73cef09f-1eb9-4d0f-a3a3-d46c44232524
- https://material-ui.com/components/container/

```js
<Container className="Home" maxWidth={false}>
```

### Page layout

- https://material-ui.com/components/grid/#grid
- Grids are defining the page layout. Their usage is mandatory.
- Every element on the page has to be wrapped into `<Grid item>` component.
- Grid items (even a single one) has to be wrapped into a Grid container component.
- Spacing is set up once at container level. There is no spacing set at item level.

```js
<Grid container className="Hero" spacing={1}>
  <Grid item xs={12}>
	<Card className={classes.card}>
	...
  </Grid>
</Grid>
```

- The grid is set up in the current / parent / container component following the single responsibility principle.
- Child components have no responsibility to align themselves to their parents and siblings. The parent container has to set up the grid, alone.
- In this example Header, Hero, Features are all aligned to the grid even if they don't have any Grid components inside.

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

#### Notes on spacing

- MUI's spacing / grid mechanism is far from perfect
- It uses CSS Flexbox for layout instead of CSS Grid which is a bad practice
- Has a strange negative margins policy / limitation which has to be tackled all the time manually in the code (See https://material-ui.com/components/grid/#negative-margin)
- It's `spacing={x}` construct inserts both vertical and horizontal spacing which breaks the visual flow. Sometimes either the horizontal or vertical spacing set on the Grid component has to be removed manually with custom styles.

### Content

- There are many types of elements which can be displayed on a webpage: content, navigation, inputs (forms), notifications, decorations (icons, background images, ...) and so.
- Content elements are anything information: articles, descriptions, product plans, list of products, etc. - Usually what we fetch from the API / database.
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

- With `makeStyles` and `useMediaQuery` MUI provides a quite good enough toolset to enable responsiveness
- Breakpoints are quite limited (like has no `portrait` or `landscape` options) or even incomplete (tackling iPad Pro). Be prepared to add new ones.

General rules:

- Always build from top to bottom, ie from mobile to desktop screens. (Mobile first design)
- This makes sure only `up` breakpoints are used, no `down`s. This cleans up heavily the code and the mental process.

```js
const useStyles = makeStyles(theme => ({
  dashboard: {
	// mobile styles first
	...

	// then tablet
	[theme.breakpoints.up("md")]: {
  	  ...
  	},

	// then laptop
  	[theme.breakpoints.up("lg")]: {
  	  ...
  	}
  }
}));
```

### Dark mode

- The default MUI dark theme is not legible / accessible at all: https://i.imgur.com/Xn3qC0b.png
- The primary color (blue) contrast ratio to the background (blackish) is not passing the visibility tests: https://contrast-ratio.com/#%233f51b5-on-%23303030
- Also an issue is filed in MUI Github: https://github.com/mui-org/material-ui/issues/18776

```js
// This is not legible
<Button color="primary">Learn More</Button>
```

- There is no _official_ theme switcher module / plugin: https://material-ui.com/discover-more/related-projects/#theming nor an NPM module: https://www.npmjs.com/search?q=material%20ui%20theme%20switch
- There is this module https://www.npmjs.com/package/material-ui-theme-state which returns a 404 error for it's Github repo page: https://github.com/bluelovers/ws-react/material-ui-theme-state#readme

## In this project

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

- https://material-ui.com/api/toolbar/
- Toolbar is just a colored bar. It needs to be filled with a Menu, Search, Icons, Site title etc ...

### Menu

- In portrait mode: hamburger menu / Drawer: https://material-ui.com/components/drawers/#drawer
- In landscape mode: Tabs, with scrolling tab headers on large number of menu items: https://material-ui.com/components/tabs/#tabs

### Hero

- https://material-ui.com/components/cards/#card
- It's the first _slide_ describing the product / service with a headline, a short description and an image. And usually offers a call to action button.
- So it's ... a Card component

### Features

- https://material-ui.com/components/cards/#card
- It's a list of components ... so Grid has to be used
- Components resemble the features of a Card (title, description, call to action) ... so they are Card components
