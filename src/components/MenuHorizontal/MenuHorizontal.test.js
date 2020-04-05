import React from "react";
import { render } from "@testing-library/react";
import MenuHorizontal from "./MenuHorizontal";

it("has a MenuHorizontal component", () => {
  const { getByText } = render(<MenuHorizontal />);
  expect(getByText("MenuHorizontal")).toBeInTheDocument();
});
