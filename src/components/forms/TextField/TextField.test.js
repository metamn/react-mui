import React from "react";
import { render } from "@testing-library/react";
import TextField from "./TextField";

it("has a TextField component", () => {
  const { getByText } = render(<TextField />);
  expect(getByText("TextField")).toBeInTheDocument();
});
