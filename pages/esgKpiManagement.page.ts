import { Page, Locator } from "@playwright/test";

export class EsgKpiManagementPage {
  page: Page;
  keyFeaturesHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.keyFeaturesHeader = page.getByRole("heading", { name: "Key features" });
  }
}

export default EsgKpiManagementPage;
