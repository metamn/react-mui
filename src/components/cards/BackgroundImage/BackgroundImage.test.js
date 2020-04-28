import React from "react";
import { render } from "@testing-library/react";
import BackgroundImage from "./BackgroundImage";

it("has a BackgroundImage component", () => {
  const { getByText } = render(<BackgroundImage />);
  expect(getByText("BackgroundImage")).toBeInTheDocument();
});
