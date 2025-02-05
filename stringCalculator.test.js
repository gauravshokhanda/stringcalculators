const add = require("./stringCalculator");

test("supports custom delimiter defined in format //;\n1;2", () => {
    expect(add("//;\n1;2")).toBe(3);
  });
  