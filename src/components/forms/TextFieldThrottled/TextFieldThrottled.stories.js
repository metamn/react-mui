import React from "react";
import TextFieldThrottled from "./TextFieldThrottled";
import ApiDoc from "./TextFieldThrottled.md";

export default {
  component: TextFieldThrottled,
  title: "TextFieldThrottled",
  parameters: { notes: ApiDoc }
};

export const Default = () => <TextFieldThrottled />;
