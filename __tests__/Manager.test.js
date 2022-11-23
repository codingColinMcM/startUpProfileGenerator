const Manager = require("../lib/Manager");

test("Can set office number via constructor argument", () => {
  const testValue = 100;
  const e = new Manager("John", 1, "test@test.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
  //code goes here
  const testValue = "Manager";
  const e = new Manager("John", 1, "test@test.com", 100);
  expect(e.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
  //code goes here
  const testValue = 100;
  const e = new Manager("John", 1, "test@test.com", 100);
  expext(e.getOffice()).toBe(testValue);
});