import React from "react";
import Features from "./Features";
import ApiDoc from "./Features.md";

export default {
  component: Features,
  title: "Features",
  parameters: { notes: ApiDoc }
};

export const Default = () => <Features />;
