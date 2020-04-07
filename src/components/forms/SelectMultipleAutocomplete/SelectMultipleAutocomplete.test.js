import React from "react";
import { render } from "@testing-library/react";
import SelectMultipleAutocomplete from "./SelectMultipleAutocomplete";

it("has a SelectMultipleAutocomplete component", () => {
  const { getByText } = render(<SelectMultipleAutocomplete />);
  expect(getByText("SelectMultipleAutocomplete")).toBeInTheDocument();
});
