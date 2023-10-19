import { Page, Locator } from "@playwright/test";

class BlogPage {
  private page: Page;
  blogBtn: Locator;
  postList: Locator;

  constructor(page: Page) {
    this.page = page;
    this.blogBtn = page.locator("#zak-primary-menu li").nth(3);
    this.postList = page.locator(".zak-secondary .widget_recent_entries ul li");
  }

  async navigate() {
    await this.page.goto("/");
  }
}

export default BlogPage;
