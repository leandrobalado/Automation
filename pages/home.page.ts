import { Page, Locator } from "@playwright/test";

class HomePage {
  private page: Page;
  getStartedBtn: Locator;
  headingText: Locator;
  homeLink: Locator;
  searchIcon: Locator;
  navLinks: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getStartedBtn = page.locator("#get-started");
    this.headingText = page.locator("text=Think different. Make different.");
    this.homeLink = page.locator("#zak-primary-menu >> text=Home");
    this.searchIcon = page.locator(
      '//*[@class="zak-header-actions zak-header-actions--desktop"]//*[@class="zak-header-action zak-header-search"]'
    );
    this.navLinks = page.locator("#zak-primary-menu li");
  }

  async navigate() {
    await this.page.goto("/");
  }

  getNavLinksText() {
    return this.navLinks.allTextContents();
  }
}

export default HomePage;
