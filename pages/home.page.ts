import { Page, Locator } from "@playwright/test";

export class HomePage {
  page: Page;
  getInTouchBtn: Locator;
  FinanceAndESGdropdown: Locator;
  ESGKPIEngineDropdownOption: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getInTouchBtn = page
      .locator("#masthead")
      .getByRole("link", { name: "Get in touch" });
    this.FinanceAndESGdropdown = page.locator("#menu-item-29979");
    this.ESGKPIEngineDropdownOption = page.locator("#menu-item-32083");
  }

  async visit() {
    await this.page.goto("https://www.sapfioneer.com/");
  }
}

export default HomePage;
