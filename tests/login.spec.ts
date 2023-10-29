import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/login.page";
import { loginScenario } from "../test-data/test-data";
import { MenuComponent } from "../components/menu.component";

test.describe("User login to Swag Labs", () => {
  let loginPage: LoginPage;
  let menuComponent: MenuComponent;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    menuComponent = new MenuComponent(page);
    await page.goto("/");
  });

  // iterate through scenarios for different login attempts
  loginScenario.forEach((scenario) => {
    test(`Login with ${scenario.name}`, async ({ page }) => {
      // Arrange is based on test-data.ts

      // Act
      await loginPage.login(scenario.user, scenario.pass);

      // Assert
      if (scenario.name == "correct credentials") {
        await expect(page.url()).toBe(scenario.check);
      } else {
        await expect(loginPage.errorMatch).toHaveText(scenario.check);
      }
    });
  });

  test("Logout user", async ({ page }) => {
    // Arrange
    const expectedUrl = "https://www.saucedemo.com/";

    // Act
    await loginPage.login(process.env.USER ?? "", process.env.PASSWORD ?? "");
    await menuComponent.logout();

    // Assert
    await expect(page.url()).toBe(expectedUrl);
  });
});
