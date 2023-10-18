import { formatDateDefault } from ".";

import { date } from "@__tests__/mocks/utils/getDates";

describe("Utils: Methods of Dates", () => {
  it("Should format date in 'YYYY-MM-DDTHH:MM:SS.792Z' to 'dd/MM/yyyy'", () => {
    const data = formatDateDefault(date);

    expect(data).toBe("17/10/2023");
  });
});
