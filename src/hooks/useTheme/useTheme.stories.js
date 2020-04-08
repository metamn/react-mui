import React from "react";
import useTheme from "./useTheme";
import ApiDoc from "./useTheme.md";

export default {
  component: useTheme,
  title: "useTheme",
  parameters: { notes: ApiDoc }
};

export const Default = () => <useTheme />;
