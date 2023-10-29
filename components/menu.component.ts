import { type Page } from "@playwright/test";

export class MenuComponent {
  constructor(private page: Page) {}

  menuButton = this.page.getByRole("button", { name: "Open Menu" });
  allItemsButton = this.page.getByRole("link", { name: "All Items" });
  aboutButton = this.page.getByRole("link", { name: "About" });
  resetButton = this.page.getByRole("link", { name: "Reset App State" });
  logoutButton = this.page.getByRole("link", { name: "Logout" });
  header = this.page.getByText("Swag Labs");
  cartButton = this.page.locator("id=shopping_cart_container");

  async logout(): Promise<void> {
    await this.menuButton.click();
    await this.logoutButton.click();
  }
}
