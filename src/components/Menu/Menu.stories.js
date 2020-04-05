import React from "react";
import Menu from "./Menu";
import ApiDoc from "./Menu.md";

export default {
  component: Menu,
  title: "Menu",
  parameters: { notes: ApiDoc }
};

export const Default = () => <Menu />;
