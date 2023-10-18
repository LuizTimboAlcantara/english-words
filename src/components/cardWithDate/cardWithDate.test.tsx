import React from "react";

import CardWithDate from "./";
import { render, screen } from "@testing-library/react-native";

describe("Component: CardWithDate", () => {
  it("should be to render card and have property word and label", () => {
    render(<CardWithDate date={new Date()} title="the" label="history" />);

    const title = screen.queryByTestId("word");
    const label = screen.queryByTestId("label");

    expect(title).toBeTruthy();
    expect(label).toBeTruthy();
  });

  it("should be to render card and have title and label", () => {
    render(<CardWithDate date={new Date()} title="the" label="history" />);

    const title = screen.getByText("the");
    const label = screen.getByText("history:");

    expect(title).toBeTruthy();
    expect(label).toBeTruthy();
  });
});
