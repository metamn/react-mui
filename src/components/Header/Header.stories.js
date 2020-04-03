import React from "react";
import Header from "./Header";
import ApiDoc from "./Header.md";

export default {
  component: Header,
  title: "Header",
  parameters: { notes: ApiDoc }
};

export const Default = () => <Header />;
