import React from "react";
import TextField from "./TextField";
import ApiDoc from "./TextField.md";

export default {
  component: TextField,
  title: "TextField",
  parameters: { notes: ApiDoc }
};

export const Default = () => <TextField />;
