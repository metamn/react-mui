import React from "react";
import { render } from "@testing-library/react";
import Forms from "./Forms";

it("has a Forms component", () => {
  const { getByText } = render(<Forms />);
  expect(getByText("Forms")).toBeInTheDocument();
});
