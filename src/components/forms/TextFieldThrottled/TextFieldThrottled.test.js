import React from "react";
import { render } from "@testing-library/react";
import TextFieldThrottled from "./TextFieldThrottled";

it("has a TextFieldThrottled component", () => {
  const { getByText } = render(<TextFieldThrottled />);
  expect(getByText("TextFieldThrottled")).toBeInTheDocument();
});
