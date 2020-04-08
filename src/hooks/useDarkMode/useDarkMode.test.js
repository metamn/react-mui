import React from "react";
import { render } from "@testing-library/react";
import useDarkMode from "./useDarkMode";

it("has a useDarkMode component", () => {
  const { getByText } = render(<useDarkMode />);
  expect(getByText("useDarkMode")).toBeInTheDocument();
});
