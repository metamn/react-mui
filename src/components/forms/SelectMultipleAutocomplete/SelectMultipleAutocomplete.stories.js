import React from "react";
import SelectMultipleAutocomplete from "./SelectMultipleAutocomplete";
import ApiDoc from "./SelectMultipleAutocomplete.md";

export default {
  component: SelectMultipleAutocomplete,
  title: "SelectMultipleAutocomplete",
  parameters: { notes: ApiDoc }
};

export const Default = () => <SelectMultipleAutocomplete />;
