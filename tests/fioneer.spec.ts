import { expect } from "@playwright/test";
import { test } from "../initialisations";

test.describe("fioneer validations", () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.visit();
  });

  test("Get in touch button has yellow color", async ({ homePage }) => {
    await expect(homePage.getInTouchBtn).toHaveCSS(
      "background-color",
      "rgb(255, 212, 60)"
    );
  });

  test("Redirects to the correct page", async ({
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

  test("Verifies email format error message", async ({ page, homePage, contactPage }) => {
    await homePage.getInTouchBtn.click();
    await expect(page).toHaveURL("https://www.sapfioneer.com/contact/");
    await contactPage.fillEmailFormWithInvalidData();
    await expect(contactPage.emailValidationMsg).toHaveText(
      "Email must be formatted correctly."
    );
  });
});
