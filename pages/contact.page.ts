import { Page, Locator } from "@playwright/test";

export class ContactPage {
  page: Page;
  emailInput: Locator;
  contactUsForm: Locator;
  iframeForm: Locator;
  contactUsHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.locator('input[name="email"]'); //grab by html tag and its attribute
    this.contactUsForm = page.locator("id=section_76273742");
    this.iframeForm = page.locator("iframe#hs-form-iframe-0");
    this.contactUsHeader = page.locator("id=text-2209554053");
  }
}

export default ContactPage;
