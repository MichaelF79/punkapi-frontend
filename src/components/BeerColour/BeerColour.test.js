import React from "react";
import { render } from "@testing-library/react";
import BeerColour from "./BeerColour";

describe("BeerColour tests", () => {
  it("should render", () => {
    expect(render(<BeerColour />)).toBeTruthy();
  });
});
