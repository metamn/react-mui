import React from "react";
import Uncontrolled from "./Uncontrolled";
import ApiDoc from "./Uncontrolled.md";

export default {
  component: Uncontrolled,
  title: "Uncontrolled",
  parameters: { notes: ApiDoc }
};

export const Default = () => <Uncontrolled />;
