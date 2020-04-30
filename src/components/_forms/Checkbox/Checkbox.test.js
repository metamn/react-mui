import React from "react";
import { render } from "@testing-library/react";
import Checkbox from "./Checkbox";

it("has a Checkbox component", () => {
  const { getByText } = render(<Checkbox />);
  expect(getByText("Checkbox")).toBeInTheDocument();
});
