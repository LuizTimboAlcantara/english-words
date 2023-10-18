import React from "react";

import CardList from "./";
import { render, screen } from "@testing-library/react-native";

describe("Component: CardList", () => {
  it("should be to render card and have property title", () => {
    render(<CardList title="belive" />);

    const title = screen.queryByTestId("title");

    expect(title).toBeTruthy();
  });

  it("should be to render card and have title", () => {
    render(<CardList title="belive" />);

    const title = screen.getByText("belive");

    expect(title).toBeTruthy();
  });
});
