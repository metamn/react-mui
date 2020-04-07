import React from "react";
import Checkbox from "./Checkbox";
import ApiDoc from "./Checkbox.md";

export default {
  component: Checkbox,
  title: "Checkbox",
  parameters: { notes: ApiDoc }
};

export const Default = () => <Checkbox />;
