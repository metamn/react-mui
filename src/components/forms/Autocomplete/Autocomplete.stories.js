import React from "react";
import Autocomplete from "./Autocomplete";
import ApiDoc from "./Autocomplete.md";

export default {
  component: Autocomplete,
  title: "Autocomplete",
  parameters: { notes: ApiDoc }
};

export const Default = () => <Autocomplete />;
