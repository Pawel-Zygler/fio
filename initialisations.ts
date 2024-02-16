import { test as base } from "@playwright/test";
import HomePage from "./pages/home.page";
import ContactPage from "./pages/contact.page";
import EsgKpiManagementPage from "./pages/esgKpiManagement.page";

type pageObjectClass = {
  homePage: HomePage;
  contactPage: ContactPage;
  esgKpiManagementPage: EsgKpiManagementPage;
};

export const test = base.extend<pageObjectClass>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  contactPage: async ({ page }, use) => {
    await use(new ContactPage(page));
  },
  esgKpiManagementPage: async ({ page }, use) => {
    await use(new EsgKpiManagementPage(page));
  },
});
