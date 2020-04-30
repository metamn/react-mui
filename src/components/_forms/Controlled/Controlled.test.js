import React from "react";
import { render } from "@testing-library/react";
import Controlled from "./Controlled";

it("has a Controlled component", () => {
  const { getByText } = render(<Controlled />);
  expect(getByText("Controlled")).toBeInTheDocument();
});
