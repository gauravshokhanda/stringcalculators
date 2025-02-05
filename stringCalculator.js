test("returns the number itself if only one number is provided", () => {
    expect(add("1")).toBe(1);
  });
  
  module.exports = add;
  