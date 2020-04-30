import React from "react";
import { render } from "@testing-library/react";
import Rules from "./Rules";

it("has a Rules component", () => {
  const { getByText } = render(<Rules />);
  expect(getByText("Rules")).toBeInTheDocument();
});
