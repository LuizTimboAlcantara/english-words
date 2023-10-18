import api from "./api";

import { word } from "@__tests__/mocks/services/wordData";

import { getDetailsWord } from "./word";

describe("Service: Word", () => {
  it("should return status 200", async () => {
    const response = await getDetailsWord("In");

    expect(response?.status).toBe(200);
  });

  it("should return word details", async () => {
    jest.spyOn(api, "get").mockResolvedValue({ data: word });
    const response = await getDetailsWord("In");

    expect(response?.data[0].phonetic).toBe("/ɪn/");
  });
});
