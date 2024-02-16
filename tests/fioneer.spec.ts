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

  test.skip("Test 3 @regression - verify validation message", async ({
    page,
    contactPage,
    homePage,
  }) => {
    await homePage.getInTouchBtn.click();
    await page.frames();

    await expect(page).toHaveURL("https://www.sapfioneer.com/contact/");

    await page
      .frameLocator("#hs-form-iframe-0")
      .locator("#email-550b0952-ea48-4b4d-b0cc-89ce87f17153")
      .fill("321312");

    await expect(contactPage.contactUsHeader).toBeVisible();

    //test this passing tests somehow, search for text and see it passes, then change to other text
  });
});
