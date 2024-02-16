import { Page, Locator } from "@playwright/test";

export class ContactPage {
  page: Page;
  emailInput: Locator;
  emailValidationMsg: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page
      .frameLocator("#hs-form-iframe-0")
      .locator('input[name="email"]');
    this.emailValidationMsg = page
      .frameLocator("#hs-form-iframe-0")
      .locator(".hs-error-msg.hs-main-font-element");
  }

  async fillEmailFormWithInvalidData() {
    await this.emailInput.fill("321321");
  }

  async getEmailValidationMessage() {
    return this.emailValidationMsg;
  }
}

export default ContactPage;
