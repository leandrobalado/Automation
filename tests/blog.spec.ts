import { test, expect } from "@playwright/test";
import BlogPage from "../pages/blog.page";

let blogPage: BlogPage;
test("Exercise No2 - Blog", async ({ page }) => {
  blogPage = new BlogPage(page);
  //Open URL
  await blogPage.navigate();
  // Go to Blog link
  await blogPage.blogBtn.click();
  // // Get the recent posts list
  // const recentPostsList = page.locator(
  //   ".zak-secondary .widget_recent_entries ul li"
  // );
  // Assert total length = 5
  expect(await blogPage.postList.count()).toEqual(5);
  // Loop through the list and assert the char length > 10
  for (const el of await blogPage.postList.elementHandles()) {
    expect((await el.textContent())!.trim().length).toBeGreaterThan(10);
  }
});
