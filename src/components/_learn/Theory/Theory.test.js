import React from "react";
import { render } from "@testing-library/react";
import Theory from "./Theory";

it("has a Theory component", () => {
  const { getByText } = render(<Theory />);
  expect(getByText("Theory")).toBeInTheDocument();
});
