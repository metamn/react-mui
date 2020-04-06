import React from "react";
import { render } from "@testing-library/react";
import Theming from "./Theming";

it("has a Theming component", () => {
  const { getByText } = render(<Theming />);
  expect(getByText("Theming")).toBeInTheDocument();
});
