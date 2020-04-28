import React from "react";
import SectionWithBackgroundImage from "./SectionWithBackgroundImage";
import ApiDoc from "./SectionWithBackgroundImage.md";

export default {
  component: SectionWithBackgroundImage,
  title: "SectionWithBackgroundImage",
  parameters: { notes: ApiDoc }
};

export const Default = () => <SectionWithBackgroundImage />;
