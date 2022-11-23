const Engineer = require("../lib/Engineer");

test("Can set GitHub account via constructor", () => {
  //code goes here
  const testValue = "codingColinMcM";
  const e = new Engineer("Foo", 1, "test@test.com", testValue);
  expect(e.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  //code goes here
  const testValue = "Engineer";
  const e = new Engineer("Colin", 1, "test@test.com", "codingColinMcM");
  expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  //code goes here
  const testValue = "codingColinMcM";
  const e = new Engineer("Colin", 1, "test@test.com", "codingColinMcM");
  expect(e.getGithub()).toBe(testValue);
});