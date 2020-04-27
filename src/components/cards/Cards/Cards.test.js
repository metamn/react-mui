import React from "react";
import { render } from "@testing-library/react";
import Cards from "./Cards";

it("has a Cards component", () => {
  const { getByText } = render(<Cards />);
  expect(getByText("Cards")).toBeInTheDocument();
});
