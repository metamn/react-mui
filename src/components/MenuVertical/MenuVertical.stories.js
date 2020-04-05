import React from "react";
import MenuVertical from "./MenuVertical";
import ApiDoc from "./MenuVertical.md";

export default {
  component: MenuVertical,
  title: "MenuVertical",
  parameters: { notes: ApiDoc }
};

export const Default = () => <MenuVertical />;
