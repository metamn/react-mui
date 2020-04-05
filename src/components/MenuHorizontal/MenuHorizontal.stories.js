import React from "react";
import MenuHorizontal from "./MenuHorizontal";
import ApiDoc from "./MenuHorizontal.md";

export default {
  component: MenuHorizontal,
  title: "MenuHorizontal",
  parameters: { notes: ApiDoc }
};

export const Default = () => <MenuHorizontal />;
