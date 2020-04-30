import React from "react";
import { render } from "@testing-library/react";
import TextFieldUncontrolled from "./TextFieldUncontrolled";

it("has a TextFieldUncontrolled component", () => {
  const { getByText } = render(<TextFieldUncontrolled />);
  expect(getByText("TextFieldUncontrolled")).toBeInTheDocument();
});
