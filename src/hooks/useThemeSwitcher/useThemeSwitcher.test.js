import React from "react";
import { render } from "@testing-library/react";
import useThemeSwitcher from "./useThemeSwitcher";

it("has a useThemeSwitcher component", () => {
  const { getByText } = render(<useThemeSwitcher />);
  expect(getByText("useThemeSwitcher")).toBeInTheDocument();
});
