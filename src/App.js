import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/home/Home";
import Forms from "./components/forms/Forms";
import Theming from "./components/theming/Theming";

import CssBaseline from "@material-ui/core/CssBaseline";

const App = () => {
  return (
    <>
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
    </>
  );
};

export default App;
