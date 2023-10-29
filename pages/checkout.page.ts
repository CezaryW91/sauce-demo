import { type Page } from "@playwright/test";

export class CheckoutOnePage {
  constructor(private page: Page) {}

  checkoutHeader = this.page.getByText("Checkout: Your Information");
  firstNameInput = this.page.locator('[data-test="firstName"]');
  lastNameInput = this.page.locator('[data-test="lastName"]');
  postalCodeInput = this.page.locator('[data-test="postalCode"]');
  errorInput = this.page.locator('[data-test="error"]');
  continueButton = this.page.locator('[data-test="continue"]');

  async checkout(fName: string, lName: string, code: string): Promise<void> {
    await this.firstNameInput.fill(fName);
    await this.lastNameInput.fill(lName);
    await this.postalCodeInput.fill(code);
    await this.continueButton.click();
  }
}

export class CheckoutTwoPage {
  constructor(private page: Page) {}

  checkoutHeader = this.page.getByText("Checkout: Overview");
  qtyHeader = this.page.getByText("QTY");
  descriptionHeader = this.page.getByText("Description");
  paymentInformation = this.page.getByText("Payment Information");
  paymentDetails = this.page.getByText("SauceCard #31337");
  shippingInformation = this.page.getByText("Shipping Information");
  shippingDetails = this.page.getByText("Free Pony Express Delivery!");
  priceInformation = this.page.getByText("Price Total");
  priceDetails = this.page.getByText("Item total: $0"); // different validation needed
  taxInformation = this.page.getByText("Tax: $0.00"); // different validation needed
  totalDetails = this.page.getByText("Total: $0.00"); // different validation needed
  cancelButton = this.page.locator('[data-test="cancel"]');
  finishButton = this.page.locator('[data-test="finish"]');
}

export class CheckoutCompletePage {
  constructor(private page: Page) {}

  checkoutHeader = this.page.getByText("Checkout: Complete!");
  image = this.page.getByRole("img", { name: "Pony Express" });
  thanksHeader = this.page.getByRole("heading", {
    name: "Thank you for your order!",
  });
  summaryText = this.page.getByText(
    "Your order has been dispatched, and will arrive just as fast as the pony can get"
  );
  returnButton = this.page.locator('[data-test="back-to-products"]');
}
