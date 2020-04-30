import React from "react";
import Hero from "./Hero";
import ApiDoc from "./Hero.md";

export default {
  component: Hero,
  title: "Hero",
  parameters: { notes: ApiDoc }
};

export const Default = () => <Hero />;
