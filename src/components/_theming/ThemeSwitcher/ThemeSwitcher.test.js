import React from "react";
import { render } from "@testing-library/react";
import ThemeSwitcher from "./ThemeSwitcher";

it("has a ThemeSwitcher component", () => {
  const { getByText } = render(<ThemeSwitcher />);
  expect(getByText("ThemeSwitcher")).toBeInTheDocument();
});
