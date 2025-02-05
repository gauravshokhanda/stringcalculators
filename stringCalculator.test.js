const add = require("./stringCalculator");

test("returns the number itself if only one number is provided", () => {
    expect(add("1")).toBe(1);
  });
  