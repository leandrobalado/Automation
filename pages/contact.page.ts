import { Page, Locator } from "@playwright/test";

class ContactPage {
  private page: Page;
  contactBtn: Locator;
  inputName: Locator;
  inputEmail: Locator;
  inputPhone: Locator;
  inputMsg: Locator;
  submitBtn: Locator;
  alertMsg: Locator;

  constructor(page: Page) {
    this.page = page;
    this.contactBtn = page.locator("#zak-primary-menu li").nth(4);
    this.inputName = page.getByRole("textbox", { name: "Name *" });
    this.inputEmail = page.getByRole("textbox", { name: "Email *" });
    this.inputPhone = page.getByRole("textbox", { name: "Phone *" });
    this.inputMsg = page.getByRole("textbox", { name: "Message" });
    this.submitBtn = page.getByRole("button", { name: "Submit" });
    this.alertMsg = page.getByRole("alert");
  }

  async navigate() {
    await this.page.goto("/");
  }

  async submitForm(
    name: string,
    email: string,
    phone: string,
    message: string
  ) {
    await this.inputName.fill(name);
    await this.inputEmail.fill(email);
    await this.inputPhone.fill(phone);
    await this.inputMsg.fill(message);    
    await this.submitBtn.click();
  }
}

export default ContactPage;
