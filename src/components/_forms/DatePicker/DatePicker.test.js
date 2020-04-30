import React from "react";
import { render } from "@testing-library/react";
import DatePicker from "./DatePicker";

it("has a DatePicker component", () => {
  const { getByText } = render(<DatePicker />);
  expect(getByText("DatePicker")).toBeInTheDocument();
});
