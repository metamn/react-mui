import React from "react";
import DatePicker from "./DatePicker";
import ApiDoc from "./DatePicker.md";

export default {
  component: DatePicker,
  title: "DatePicker",
  parameters: { notes: ApiDoc }
};

export const Default = () => <DatePicker />;
