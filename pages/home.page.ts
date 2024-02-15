import { Page, Locator } from "@playwright/test";

export class HomePage {
  page: Page;
  getInTouchBtn: Locator;
  FinanceAndESGdropdown: Locator;
  keyFeaturesHeader: Locator;
  masterESGKPIManagementHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getInTouchBtn = page
      .locator("#masthead")
      .getByRole("link", { name: "Get in touch" });
    this.FinanceAndESGdropdown = page.locator("#menu-item-29979");
    this.masterESGKPIManagementHeader = page.locator("#text-1681411785");
    this.keyFeaturesHeader = page.locator("#col-1967053932");
  }

  async visit() {
    await this.page.goto("https://www.sapfioneer.com/");
  }
}

export default HomePage;
