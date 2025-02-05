const add = require("./stringCalculator");

test("throws exception for negative numbers", () => {
    expect(() => add("1,-2,3,-4")).toThrow("Negative numbers not allowed: -2, -4");
  });
  