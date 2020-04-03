import React from "react";
import useMedia from "./useMedia";
import ApiDoc from "./useMedia.md";

export default {
  component: useMedia,
  title: "useMedia",
  parameters: { notes: ApiDoc }
};

export const Default = () => <useMedia />;
