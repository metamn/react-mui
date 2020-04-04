import React from "react";
import { render } from "@testing-library/react";
import Logo from "./Logo";

it("has a Logo component", () => {
  const { getByText } = render(<Logo />);
  expect(getByText("Logo")).toBeInTheDocument();
});
