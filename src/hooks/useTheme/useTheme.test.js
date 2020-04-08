import React from "react";
import { render } from "@testing-library/react";
import useTheme from "./useTheme";

it("has a useTheme component", () => {
  const { getByText } = render(<useTheme />);
  expect(getByText("useTheme")).toBeInTheDocument();
});
