import { Page, Locator } from "@playwright/test";

class AccountPage {
  private page: Page;
  ordersBtn: Locator;
  downloadsBtn: Locator;
  logInBtn: Locator;
  registerBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.ordersBtn = page.getByRole("link", { name: "Orders", exact: true });
    this.downloadsBtn = page.getByRole("link", {
      name: "Downloads",
      exact: true,
    });
    this.logInBtn = page.getByRole("button", { name: "Log in" });
    this.registerBtn = page.getByRole("button", { name: "Register" });
  }

  async navigate() {
    await this.page.goto("/my-account/");
  }
}

export default AccountPage;
