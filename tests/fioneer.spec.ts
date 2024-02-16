import { expect } from "@playwright/test";
import { test } from "../initialisations";

test.describe("fioneer tests", () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.visit();
  });

  test("Test 1 @smoke - has yellow color", async ({ homePage }) => {
    await expect(homePage.getInTouchBtn).toHaveCSS(
      "background-color",
      "rgb(255, 212, 60)"
    );
  });

  test("Test 2 @regression - redirected to the correct page", async ({
    page,
    homePage,
    esgKpiManagementPage,
  }) => {
    await homePage.FinanceAndESGdropdown.hover();
    await page.click('text="ESG KPI Engine"');

    await expect(page).toHaveURL(
      "https://www.sapfioneer.com/finance-esg/esg-kpi-engine/"
    );
    await expect(homePage.masterESGKPIManagementHeader).toHaveText(
      "Master ESG KPI management"
    );
    await expect(esgKpiManagementPage.keyFeaturesHeader).toHaveText("Key features");
  });

  test("Test 3 @regression - verify validation message", async ({ page, homePage }) => {
    await homePage.getInTouchBtn.click();

    await expect(page).toHaveURL("https://www.sapfioneer.com/contact/");

    const email = await page
      .frameLocator("#hs-form-iframe-0")
      .locator('input[name="email"]');
    await email.fill("321321");

    const emailValidationMsg = await page
      .frameLocator("#hs-form-iframe-0")
      .locator(".hs-error-msg.hs-main-font-element");

    await expect(emailValidationMsg).toHaveText("Email must be formatted correctly.");
  });
});
