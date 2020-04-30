import React from "react";
import Learn from "./Learn";
import ApiDoc from "./Learn.md";

export default {
  component: Learn,
  title: "Learn",
  parameters: { notes: ApiDoc }
};

export const Default = () => <Learn />;
