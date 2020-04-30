import React from "react";
import { render } from "@testing-library/react";
import DarkMode from "./DarkMode";

it("has a DarkMode component", () => {
  const { getByText } = render(<DarkMode />);
  expect(getByText("DarkMode")).toBeInTheDocument();
});
