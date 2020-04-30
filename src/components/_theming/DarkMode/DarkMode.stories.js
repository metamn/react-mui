import React from "react";
import DarkMode from "./DarkMode";
import ApiDoc from "./DarkMode.md";

export default {
  component: DarkMode,
  title: "DarkMode",
  parameters: { notes: ApiDoc }
};

export const Default = () => <DarkMode />;
