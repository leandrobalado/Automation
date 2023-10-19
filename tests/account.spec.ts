import { test, expect } from "@playwright/test";
import AccountPage from "../pages/account.page";

let accountPage: AccountPage;

test.describe("My Account", () => {
  test("Access Orders", async ({ page }) => {
    accountPage = new AccountPage(page);
    await accountPage.navigate();
    await accountPage.ordersBtn.click();
    await expect(page).toHaveURL(/.*orders/);
  });

  test("Access Downloads", async ({ page }) => {
    accountPage = new AccountPage(page);
    await accountPage.navigate();
    await accountPage.downloadsBtn.click();
    await expect(page).toHaveURL(/.*downloads/);
  });
});

test.describe("Verify Login", () => {
  test.use({ storageState: "notLoggedInState.json" });
  test("Verify login and register is visible", async ({ page }) => {
    accountPage = new AccountPage(page);
    await accountPage.navigate();
    await expect(accountPage.logInBtn).toBeVisible();
    await expect(accountPage.registerBtn).toBeVisible();
  });
});

//--------------------------------------------------------------------------------------------

// // Implementando beaforeEach
// test.describe("My Account - beforeEach", () => {
//   test.beforeEach(async ({ page }) => {
//     await page.goto("/my-account/");
//     await page.locator("#username").fill("practiceuser1");
//     await page.locator("#password").fill("PracticePass1!");
//     await page.getByRole("button", { name: "Log in" }).click();
//   });

//   test("Access Orders - bE", async ({ page }) => {
//     await page.getByRole("link", { name: "Orders", exact: true }).click();
//     await expect(page).toHaveURL(/.*orders/);
//   });

//   test("Access Downloads - bE", async ({ page }) => {
//     await page.getByRole("link", { name: "Downloads", exact: true }).click();
//     await expect(page).toHaveURL(/.*downloads/);
//   });
// });

// // Implementando beforeAll
// test.describe.serial("My Account - beforeAll", () => {
//   let page: Page;

//   test.beforeAll(async ({ browser }) => {
//     page = await browser.newPage();
//     await page.goto("/my-account/");
//     await page.locator("#username").fill("practiceuser1");
//     await page.locator("#password").fill("PracticePass1!");
//     await page.getByRole("button", { name: "Log in" }).click();
//   });

//   test("Access Orders - bA", async () => {
//     await page.getByRole("link", { name: "Orders", exact: true }).click();
//     await expect(page).toHaveURL(/.*orders/);
//   });

//   test("Access Downloads - bA", async () => {
//     await page.getByRole("link", { name: "Downloads", exact: true }).click();
//     await expect(page).toHaveURL(/.*downloads/);
//   });
// });
