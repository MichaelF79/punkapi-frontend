import React from "react";
import { render } from "@testing-library/react";
import BeerStrength from "./BeerStrength";

describe("BeerStrength tests", () => {
  it("should render", () => {
    expect(render(<BeerStrength />)).toBeTruthy();
  });
});
