import React from "react";
import Rules from "./Rules";
import ApiDoc from "./Rules.md";

export default {
  component: Rules,
  title: "Rules",
  parameters: { notes: ApiDoc }
};

export const Default = () => <Rules />;
