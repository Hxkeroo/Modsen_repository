const { crypt } = require("./index");

test("encrypt test", () => {
  expect(crypt("словарь")).toEqual("лсошамь");
});

test("decrypt test", () => {
  expect(crypt("пошый локмуцпит")).toEqual("новый сотрудник");
});
