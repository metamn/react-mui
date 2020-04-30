import React from "react";
import BackgroundImage from "./BackgroundImage";
import ApiDoc from "./BackgroundImage.md";

export default {
  component: BackgroundImage,
  title: "BackgroundImage",
  parameters: { notes: ApiDoc }
};

export const Default = () => <BackgroundImage />;
