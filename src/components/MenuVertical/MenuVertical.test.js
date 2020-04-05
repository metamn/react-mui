import React from "react";
import { render } from "@testing-library/react";
import MenuVertical from "./MenuVertical";

it("has a MenuVertical component", () => {
  const { getByText } = render(<MenuVertical />);
  expect(getByText("MenuVertical")).toBeInTheDocument();
});
