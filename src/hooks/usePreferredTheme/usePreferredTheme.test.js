import React from "react";
import { render } from "@testing-library/react";
import usePreferredTheme from "./usePreferredTheme";

it("has a usePreferredTheme component", () => {
  const { getByText } = render(<usePreferredTheme />);
  expect(getByText("usePreferredTheme")).toBeInTheDocument();
});
