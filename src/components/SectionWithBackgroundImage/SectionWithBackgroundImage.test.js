import React from "react";
import { render } from "@testing-library/react";
import SectionWithBackgroundImage from "./SectionWithBackgroundImage";

it("has a SectionWithBackgroundImage component", () => {
  const { getByText } = render(<SectionWithBackgroundImage />);
  expect(getByText("SectionWithBackgroundImage")).toBeInTheDocument();
});
