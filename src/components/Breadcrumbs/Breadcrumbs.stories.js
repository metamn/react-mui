import React from "react";
import Breadcrumbs from "./Breadcrumbs";
import ApiDoc from "./Breadcrumbs.md";

export default {
  component: Breadcrumbs,
  title: "Breadcrumbs",
  parameters: { notes: ApiDoc }
};

export const Default = () => <Breadcrumbs />;
