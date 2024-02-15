import { expect } from "@playwright/test";
import { test } from "../initialisations";

test.describe("fioneer tests", () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.visit();
  });

  test("Test 1 - has yellow color", async ({ homePage }) => {
    await expect(homePage.getInTouchBtn).toHaveCSS(
      "background-color",
      "rgb(255, 212, 60)"
    );
  });

  test("Test 2 - redirected to the correct page", async ({ page }) => {
    //await homePage.FinanceAndESGdropdown.click();
    //change to proper selectors maybe
    //possibly remmove text for translations
    await page.hover('text="Finance & ESG"');

    //await page.waitForSelector('text="ESG KPI Engine"', { state: "visible" });

    await page.click('text="ESG KPI Engine"');
    await expect(page).toHaveURL(
      "https://www.sapfioneer.com/finance-esg/esg-kpi-engine/"
    );
    await expect(page.locator("h1")).toHaveText("Master ESG KPI management");
    //add more asertions
  });

  test("Test 3 - verify validation message", async ({ page, contactPage, homePage }) => {
    await homePage.getInTouchBtn.click();
    await page.frames();

    await expect(page).toHaveURL("https://www.sapfioneer.com/contact/");

    await page
      .frameLocator("#hs-form-iframe-0")
      .locator("#email-550b0952-ea48-4b4d-b0cc-89ce87f17153")
      .fill("321312");

    expect(contactPage.contactUsHeader).toBeVisible();
  });
});
