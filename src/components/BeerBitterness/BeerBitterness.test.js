import React from "react";
import { render } from "@testing-library/react";
import BeerBitterness from "./BeerBitterness";

describe("BeerBitterness tests", () => {
  it("should render", () => {
    expect(render(<BeerBitterness />)).toBeTruthy();
  });
});
