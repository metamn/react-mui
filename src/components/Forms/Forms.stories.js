import React from "react";
import Forms from "./Forms";
import ApiDoc from "./Forms.md";

export default {
  component: Forms,
  title: "Forms",
  parameters: { notes: ApiDoc }
};

export const Default = () => <Forms />;
