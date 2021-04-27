import React from "react";
import { render } from "@testing-library/react";
import CardContent from "./CardContent";

describe("CardContent tests", () => {
  it("should render", () => {
    expect(render(<CardContent />)).toBeTruthy();
  });
});
