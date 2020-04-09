import React from "react";
import usePreferredTheme from "./usePreferredTheme";
import ApiDoc from "./usePreferredTheme.md";

export default {
  component: usePreferredTheme,
  title: "usePreferredTheme",
  parameters: { notes: ApiDoc }
};

export const Default = () => <usePreferredTheme />;
