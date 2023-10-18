import React from "react";

import { render, screen, waitFor } from "@__tests__/utils/customRender";

import Header from "./";

describe("Component: Header", () => {
  it("should render the header and have the 'title' property", async () => {
    render(<Header title="Home" goBack />);

    const title = await waitFor(() => screen.findByText("Home"));

    expect(title).toBeTruthy();
  });

  it("should render the header and don't have icon back", async () => {
    render(<Header title="Home" goBack={false} />);

    const back = screen.queryByTestId("icon-back");

    expect(back).toBeNull();
  });

  it("should render the header and have icon back", async () => {
    render(<Header title="Home" goBack />);

    const back = await waitFor(() => screen.getByTestId("icon-back"));

    expect(back).toBeTruthy();
  });

  it("should render the header and have icon logout", async () => {
    render(<Header title="Home" goBack />);

    const logout = await waitFor(() => screen.getByTestId("icon-logout"));

    expect(logout).toBeTruthy();
  });
});
