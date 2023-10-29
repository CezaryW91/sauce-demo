import { type Page } from "@playwright/test";

export class InventoryPage {
  constructor(private page: Page) {}

  productsHeader = this.page.getByText("Products");
  sortContainer = this.page.locator('[data-test="product_sort_container"]');
  item = this.page.locator("#item_4_title_link");
  itemToCart = this.page.locator(
    '[data-test="add-to-cart-sauce-labs-backpack"]'
  );
  inventoryList = this.page.locator(".inventory_list");
  itemName = this.page.locator(".inventory_item_name ");
}
