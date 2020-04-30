import React from "react";
import Theory from "./Theory";
import ApiDoc from "./Theory.md";

export default {
  component: Theory,
  title: "Theory",
  parameters: { notes: ApiDoc }
};

export const Default = () => <Theory />;
