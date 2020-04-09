import React from "react";
import useThemeSwitcher from "./useThemeSwitcher";
import ApiDoc from "./useThemeSwitcher.md";

export default {
  component: useThemeSwitcher,
  title: "useThemeSwitcher",
  parameters: { notes: ApiDoc }
};

export const Default = () => <useThemeSwitcher />;
