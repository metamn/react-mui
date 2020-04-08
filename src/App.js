import React, { useMemo } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/home/Home";
import Forms from "./components/forms/Forms";
import Theming from "./components/theming/Theming";

import CssBaseline from "@material-ui/core/CssBaseline";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const App = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  console.log("prefersDarkMode:", prefersDarkMode);

  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light"
        }
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/forms">
            <Forms />
          </Route>
          <Route path="/theming">
            <Theming />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
