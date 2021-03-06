import React, { useState, useMemo, useEffect } from "react";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import useLocalStorage from "../useLocalStorage";

/**
 * Displays the component
 */
const usePreferredTheme = props => {
  /**
   * Checks if the user / browser prefers dark mode.
   */
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  /**
   * Checks if the browser has stored a preference for a theme.
   */
  const [themeSaved, setThemeSaved] = useLocalStorage("current-theme");

  /**
   * Defines the current theme based on the above preferences.
   */
  const getCurrentTheme = (themeSaved, prefersDarkMode) =>
    typeof themeSaved !== "undefined"
      ? themeSaved
      : prefersDarkMode
      ? "dark"
      : "light";

  /**
   * Sets currentTheme the async way
   */
  const currentTheme = useMemo(
    () => getCurrentTheme(themeSaved, prefersDarkMode),
    [prefersDarkMode, themeSaved]
  );

  /**
   * Stores the theme in a state
   */
  const [preferredThemeID, setPreferredThemeID] = useState(currentTheme);

  /**
   * Sets theme initial value the async way
   */
  useEffect(() => setPreferredThemeID(currentTheme), [currentTheme]);

  /**
   * Saves the theme into the browser local storage
   */
  useEffect(() => setThemeSaved(preferredThemeID), [preferredThemeID]);

  return { preferredThemeID, setPreferredThemeID };
};

export { usePreferredTheme };
