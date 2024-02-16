import { Page, Locator } from "@playwright/test";

export class ContactPage {
  page: Page;
  emailInput: Locator;
  contactUsForm: Locator;
  iframeForm: Locator;
  contactUsHeader: Locator;
  emailValidationMsg: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.locator('input[name="email"]');
    this.contactUsForm = page.locator("id=section_76273742");
    this.iframeForm = page.locator("iframe#hs-form-iframe-0");
    this.contactUsHeader = page.locator("id=text-2209554053");
    this.emailValidationMsg = page.locator(".hs-error-msg.hs-main-font-element");
  }
}

export default ContactPage;
