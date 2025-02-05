const add = require("./stringCalculator");

test("returns sum of two comma-separated numbers", () => {
    expect(add("1,5")).toBe(6);
  });
  