import React from "react";
import { render } from "@testing-library/react";
import CardWithMedia from "./CardWithMedia";

it("has a CardWithMedia component", () => {
  const { getByText } = render(<CardWithMedia />);
  expect(getByText("CardWithMedia")).toBeInTheDocument();
});
