import React from "react";
import { render } from "@testing-library/react";
import Features from "./Features";

it("has a Features component", () => {
  const { getByText } = render(<Features />);
  expect(getByText("Features")).toBeInTheDocument();
});
