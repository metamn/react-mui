import React from "react";
import { render } from "@testing-library/react";
import Learn from "./Learn";

it("has a Learn component", () => {
  const { getByText } = render(<Learn />);
  expect(getByText("Learn")).toBeInTheDocument();
});
