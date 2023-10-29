import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/login.page";
import { checkoutData, loginScenario } from "../test-data/test-data";
import { MenuComponent } from "../components/menu.component";
import { InventoryPage } from "../pages/inventory.page";
import {
  CheckoutCompletePage,
  CheckoutOnePage,
  CheckoutTwoPage,
} from "../pages/checkout.page";
import { CartPage } from "../pages/cart.page";

test.describe("User can purchase a product", () => {
  let loginPage: LoginPage;
  let inventoryPage: InventoryPage;
  let checkoutOnePage: CheckoutOnePage;
  let checkoutTwoPage: CheckoutTwoPage;
  let checkoutCompletePage: CheckoutCompletePage;
  let cartPage: CartPage;
  let menuComponent: MenuComponent;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    checkoutOnePage = new CheckoutOnePage(page);
    checkoutTwoPage = new CheckoutTwoPage(page);
    checkoutCompletePage = new CheckoutCompletePage(page);
    cartPage = new CartPage(page);
    menuComponent = new MenuComponent(page);
    await page.goto("/");
    await loginPage.login(loginScenario[0].user, loginScenario[0].pass);
  });

  test("Add item to cart and complete purchase", async ({ page }) => {
    // Arrange
    const expectedHeader = "Checkout: Complete!";

    // Act
    await inventoryPage.itemToCart.click();
    await menuComponent.cartButton.click();
    await cartPage.checkoutButton.click();
    await checkoutOnePage.checkout(
      checkoutData.fName,
      checkoutData.lName,
      checkoutData.code
    );
    await checkoutTwoPage.finishButton.click();

    // Assert
    await expect(checkoutCompletePage.checkoutHeader).toHaveText(
      expectedHeader
    );
  });

  test("Add item to cart and remove it", async ({ page }) => {
    // Act
    await inventoryPage.itemToCart.click();
    await menuComponent.cartButton.click();
    await cartPage.itemRemove.click();

    // Assert
    await expect(cartPage.removedItem).toBeHidden();
  });
});
