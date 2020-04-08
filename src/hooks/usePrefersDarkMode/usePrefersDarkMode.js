import { useMemo } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createMuiTheme } from "@material-ui/core/styles";

/**
 * Displays the theme in dark mode if the user prefers it
 */
const usePrefersDarkMode = props => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light"
        }
      }),
    [prefersDarkMode]
  );

  return theme;
};

export { usePrefersDarkMode };
