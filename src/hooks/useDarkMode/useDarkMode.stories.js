import React from "react";
import useDarkMode from "./useDarkMode";
import ApiDoc from "./useDarkMode.md";

export default {
  component: useDarkMode,
  title: "useDarkMode",
  parameters: { notes: ApiDoc }
};

export const Default = () => <useDarkMode />;
