import { Page, Locator } from "@playwright/test";

export class HomePage {
  page: Page;
  getInTouchBtn: Locator;
  FinanceAndESGdropdown: Locator;
  masterESGKPIManagementHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getInTouchBtn = page
      .locator("#masthead")
      .getByRole("link", { name: "Get in touch" });
    this.FinanceAndESGdropdown = page.locator("#menu-item-29979");
    this.masterESGKPIManagementHeader = page.getByRole("heading", {
      name: "Master ESG KPI management",
    });
  }

  async visit() {
    await this.page.goto("https://www.sapfioneer.com/");
  }
}

export default HomePage;
