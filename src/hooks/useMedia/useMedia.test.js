import React from "react";
import { render } from "@testing-library/react";
import useMedia from "./useMedia";

it("has a useMedia component", () => {
  const { getByText } = render(<useMedia />);
  expect(getByText("useMedia")).toBeInTheDocument();
});
