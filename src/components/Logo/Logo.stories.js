import React from "react";
import Logo from "./Logo";
import ApiDoc from "./Logo.md";

export default {
  component: Logo,
  title: "Logo",
  parameters: { notes: ApiDoc }
};

export const Default = () => <Logo />;
