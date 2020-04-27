import React from "react";
import CardWithMedia from "./CardWithMedia";
import ApiDoc from "./CardWithMedia.md";

export default {
  component: CardWithMedia,
  title: "CardWithMedia",
  parameters: { notes: ApiDoc }
};

export const Default = () => <CardWithMedia />;
