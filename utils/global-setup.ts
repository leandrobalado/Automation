import { FullConfig, chromium } from "@playwright/test";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function globalSetup(config: FullConfig) {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Go to the URL
  await page.goto("https://practice.sdetunicorns.com/my-account/");

  // Save not-signed-in state to 'notLoggedInState.json'
  await page.context().storageState({ path: "notLoggedInState.json" });

  // Login
  await page.locator("#username").fill("practiceuser1");
  await page.locator("#password").fill("PracticePass1!");
  await page.getByRole("button", { name: "Log in" }).click();

  // Save signed-in state to 'loggedInState.json'
  await page.context().storageState({ path: "loggedInState.json" });

  await browser.close();
}

export default globalSetup;
