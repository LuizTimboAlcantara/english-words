import api from "@services/api";

import { act, render, screen, fireEvent, waitFor } from "@__tests__/utils/customRender";

import Home from "@screens/home";

import Data from "@__tests__/mocks/services/listWord";

describe("Screen: Home", () => {
  it("should be render home screen", async () => {
    jest.spyOn(api, "get").mockResolvedValue({ data: Data });

    render(<Home />);

    const titleScreen = await waitFor(() => screen.findByText(/Home/i));

    expect(titleScreen).toBeTruthy();
  });

  it("should be render home screen and verify else exist searchBar", async () => {
    jest.spyOn(api, "get").mockResolvedValue({ data: Data });

    render(<Home />);

    const searchBar = await waitFor(() => screen.findByTestId("search"));

    expect(searchBar).toBeTruthy();
  });

  it("should be render home screen and verify content screen is empty", async () => {
    jest.spyOn(api, "get").mockResolvedValue({ data: Data });

    render(<Home />);

    const word = await waitFor(() => screen.findByText("the"), { timeout: 5000 });

    expect(word).toBeTruthy();
  });

  it("should be render home screen and verify content screen is empty after searching", async () => {
    jest.spyOn(api, "get").mockResolvedValue({ data: Data });

    render(<Home />);

    const searchInput = screen.getByTestId("search");
    const word = "if";

    await act(async () => {
      fireEvent.changeText(searchInput, word);
    });

    await waitFor(() => {
      const notFoundWord = screen.queryByText("if");
      expect(notFoundWord).toBeNull();
    });
  });
});
