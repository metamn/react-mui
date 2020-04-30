import React, { useState, createContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { usePreferredTheme } from "./hooks";

import Home from "./components/_home/Home";
import Forms from "./components/_forms/Forms";
import Cards from "./components/_cards/Cards";
import Theming from "./components/_theming/Theming";
import { finsterTheme } from "./components/_theming/Finster";

import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

/**
 * Creates a context to share `switchTheme`
 */
const ThemeContext = createContext({});

/**
 * Loads a new theme
 */
const loadMuiTheme = themeID => {
  switch (themeID) {
    case "finster":
      return createMuiTheme(finsterTheme);
    default:
      return createMuiTheme({
        palette: {
          type: themeID
        }
      });
  }
};

const App = () => {
  const { preferredThemeID, setPreferredThemeID } = usePreferredTheme();
  const [currentThemeID, setCurrentThemeID] = useState(preferredThemeID);
  const [theme, setTheme] = useState(loadMuiTheme(currentThemeID));

  const switchTheme = themeID => {
    setCurrentThemeID(themeID);
    setPreferredThemeID(themeID);
    setTheme(loadMuiTheme(themeID));
  };

  return (
    <ThemeContext.Provider value={{ switchTheme: switchTheme }}>
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
            <Route path="/cards">
              <Cards />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default App;
export { ThemeContext };
