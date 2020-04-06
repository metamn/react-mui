import React from "react";
import Theming from "./Theming";
import ApiDoc from "./Theming.md";

export default {
  component: Theming,
  title: "Theming",
  parameters: { notes: ApiDoc }
};

export const Default = () => <Theming />;
