import React from "react";
import { render } from "@testing-library/react";
import Hero from "./Hero";

it("has a Hero component", () => {
  const { getByText } = render(<Hero />);
  expect(getByText("Hero")).toBeInTheDocument();
});
