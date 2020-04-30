import React from "react";
import { render } from "@testing-library/react";
import Uncontrolled from "./Uncontrolled";

it("has a Uncontrolled component", () => {
  const { getByText } = render(<Uncontrolled />);
  expect(getByText("Uncontrolled")).toBeInTheDocument();
});
