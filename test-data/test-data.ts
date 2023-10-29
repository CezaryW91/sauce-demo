export const loginScenario = [
  {
    name: "correct credentials",
    user: process.env.USER ?? "standard_user",
    pass: process.env.PASSWORD ?? "secret_sauce",
    check: "https://www.saucedemo.com/inventory.html",
  },
  {
    name: "incorrect user",
    user: "thisUserIsIncorrect",
    pass: process.env.PASSWORD ?? "secret_sauce",
    check:
      "Epic sadface: Username and password do not match any user in this service",
  },
  {
    name: "empty password",
    user: process.env.USER ?? "standard_user",
    pass: "",
    check: "Epic sadface: Password is required",
  },
  {
    name: "empty user",
    user: "",
    pass: process.env.PASSWORD ?? "secret_sauce",
    check: "Epic sadface: Username is required",
  },
  {
    name: "incorrect password",
    user: process.env.USER ?? "standard_user",
    pass: "incorrect",
    check:
      "Epic sadface: Username and password do not match any user in this service",
  },
];

export const sortOptions = [
  { name: "za", result: "Test.allTheThings() T-Shirt (Red)" },
  { name: "lohi", result: "Sauce Labs Onesie" },
  { name: "hilo", result: "Sauce Labs Fleece Jacket" },
  { name: "az", result: "Sauce Labs Backpack" },
];

export const checkoutData = { fName: "John", lName: "Smith", code: "00-000" };
