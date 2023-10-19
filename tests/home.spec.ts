import { test, expect } from "@playwright/test";
import HomePage from "../pages/home.page";

test.describe("Home Page", () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.navigate();
  });

  test("Open Home Page and verify title", async ({ page }) => {
    // Verify title
    await expect(page).toHaveTitle(
      "Practice E-Commerce Site – SDET Unicorns – Helping you succeed in Software Quality."
    );
    // Go to About section and verify title
    await page.locator(".menu-item-491").first().click();
    await expect(page).toHaveTitle("About – Practice E-Commerce Site");
  });

  test("Click get started button using CSS selector", async ({ page }) => {
    // Click on the 'GET STARTED' button
    await homePage.getStartedBtn.click();
    // Verify URL
    await expect(page).toHaveURL(/.*#get-started/);
  });

  test("Verify heading text is visible using text selector", async ({
    page,
  }) => {
    homePage = new HomePage(page);
    // Open URL
    await homePage.navigate();
    // Verify text is visible
    await expect(homePage.headingText).toBeVisible();
  });

  test("Verify home link is enabled using CSS and text selector", async ({
    page,
  }) => {
    homePage = new HomePage(page);
    // Open URL
    await homePage.navigate();
    // Find the text locator
    const homeText = await homePage.homeLink;
    // Verify home link is enable
    await expect(homeText).toBeEnabled();
  });

  test("Verify search icon is visible using xpath selector", async ({
    page,
  }) => {
    homePage = new HomePage(page);
    // Open URL
    await homePage.navigate();
    // Find the search icon
    const searchIcon = await homePage.searchIcon;
    // Verify search icon is visible
    await expect(searchIcon).toBeVisible();
  });

  test("Verify text of all nav links", async ({ page }) => {
    homePage = new HomePage(page);
    const expectedLinks = [
      "Home",
      "About",
      "Shop",
      "Blog",
      "Contact",
      "My account",
    ];
    // Open URL
    await homePage.navigate();
    // Verify nav links text
    expect(await homePage.getNavLinksText()).toEqual(expectedLinks);
  });
});
