import React, { useState, useMemo, useEffect } from "react";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import useLocalStorage from "../useLocalStorage";

/**
 * Displays the component
 */
const useTheme = props => {
  /**
   * Checks if the user / browser prefers dark mode.
   */
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  /**
   * Checks if the browser has stored a preference for a theme.
   */
  const [currentThemeSaved, setCurrentThemeSaved] = useLocalStorage(
    "current-theme"
  );

  /**
   * Defines the current theme based on the above preferences.
   */
  const getCurrentTheme = (currentThemeSaved, prefersDarkMode) =>
    typeof currentThemeSaved !== "undefined"
      ? currentThemeSaved
      : prefersDarkMode
      ? "dark"
      : "light";

  /**
   * Sets currentTheme the async way
   */
  const currentTheme = useMemo(
    () => getCurrentTheme(currentThemeSaved, prefersDarkMode),
    [prefersDarkMode, currentThemeSaved]
  );

  /**
   * Sets the theme
   */
  const [theme, setTheme] = useState(currentTheme);

  /**
   * Sets theme the async way
   */
  useEffect(() => setTheme(currentTheme), [currentTheme]);

  return [theme, setTheme];
};

export { useTheme };
