import React, { useState, createContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { usePreferredTheme } from "./hooks";

import Home from "./components/home/Home";
import Forms from "./components/forms/Forms";
import Theming from "./components/theming/Theming";

import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

/**
 * Creates a context to share `switchTheme`
 */
const ThemeContext = createContext({});

const setMuiTheme = themeID => {
  return createMuiTheme({
    palette: {
      type: themeID
    }
  });
};

const App = () => {
  const { preferredThemeID, setPreferredThemeID } = usePreferredTheme();
  const [currentThemeID, setCurrentThemeID] = useState(preferredThemeID);
  const [theme, setTheme] = useState(setMuiTheme(currentThemeID));

  const switchTheme = themeID => {
    setCurrentThemeID(themeID);
    setPreferredThemeID(themeID);
    setTheme(setMuiTheme(themeID));
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
          </Switch>
        </Router>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default App;
export { ThemeContext };
