import React from "react";
import { render } from "@testing-library/react";
import Autocomplete from "./Autocomplete";

it("has a Autocomplete component", () => {
  const { getByText } = render(<Autocomplete />);
  expect(getByText("Autocomplete")).toBeInTheDocument();
});
