import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import ApiDoc from "./ThemeSwitcher.md";

export default {
  component: ThemeSwitcher,
  title: "ThemeSwitcher",
  parameters: { notes: ApiDoc }
};

export const Default = () => <ThemeSwitcher />;
