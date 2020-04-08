import React, { useMemo } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { usePrefersDarkMode } from "./hooks";

import Home from "./components/home/Home";
import Forms from "./components/forms/Forms";
import Theming from "./components/theming/Theming";

import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";

const App = () => {
  const theme = usePrefersDarkMode();

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
