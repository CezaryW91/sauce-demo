import { type Page } from "@playwright/test";

export class CartPage {
  constructor(private page: Page) {}

  qtyHeader = this.page.getByText("QTY");
  descriptionHeader = this.page.getByText("Description");
  backButton = this.page.locator('[data-test="continue-shopping"]');
  checkoutButton = this.page.locator('[data-test="checkout"]');
  itemInCart = this.page.getByRole("link", { name: "Sauce Labs Backpack" });
  itemDesc = this.page.locator(".inventory_item_desc");
  price = this.page.locator("class=inventory_item_price");
  itemRemove = this.page.locator('[data-test="remove-sauce-labs-backpack"]');
  cartList = this.page.locator(".cart_list");
  removedItem = this.page.locator(".removed_cart_item");
}
