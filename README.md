# react-mui

Playing with React and Material UI

## Set up

- https://material-ui.com/components/css-baseline/

```js
<>
  <CssBaseline />
  <Home />
</>
```

## Page containers

- https://spectrum.chat/material-ui/help/grid-vs-box-and-now-vs-container~73cef09f-1eb9-4d0f-a3a3-d46c44232524
- https://material-ui.com/components/container/

```js
<Container className="Home" maxWidth={false}>
```

## Header / AppBar

- Outside Material UI it's called Header
- Material UI it calls AppBar
- Let's be general and have a Header containing an AppBar
- https://material-ui.com/components/app-bar/
- AppBar it's just a container of the `<header>` type. It needs to be filled with a Toolbar
- Toolbar is just a colored bar. It needs to be filled with a Menu, Search, Icons, Site title etc ...
