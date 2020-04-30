import React from "react";
import Cards from "./Cards";
import ApiDoc from "./Cards.md";

export default {
  component: Cards,
  title: "Cards",
  parameters: { notes: ApiDoc }
};

export const Default = () => <Cards />;
