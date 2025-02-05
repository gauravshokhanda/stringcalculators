const add = require("./stringCalculator");

test("handles new lines between numbers", () => {
    expect(add("1\n2,3")).toBe(6);
  });
  