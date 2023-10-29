import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/login.page";
import { loginScenario, sortOptions } from "../test-data/test-data";
import { MenuComponent } from "../components/menu.component";
import { InventoryPage } from "../pages/inventory.page";

test.describe("User can sort items by different options", () => {
  let loginPage: LoginPage;
  let inventoryPage: InventoryPage;
  let menuComponent: MenuComponent;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    menuComponent = new MenuComponent(page);
    await page.goto("/");
    await loginPage.login(loginScenario[0].user, loginScenario[0].pass);
  });

  sortOptions.forEach((option) => {
    test(`Sort items by ${option.name}`, async ({ page }) => {
      // Arrange is based on test-data.ts

      // Act
      await inventoryPage.sortContainer.selectOption(`${option.name}`);

      // Assert
      //await expect(inventoryPage.inventoryList.locator('.inventory_item').locator('.inventory_item_description').locator('.inventory_item_label').locator('.inventory_item_desc'))
      await expect(inventoryPage.itemName.first()).toHaveText(option.result);
    });
  });
});
