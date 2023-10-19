import { test, expect } from "@playwright/test";
import CartPage from "../pages/cart.page";
import path from "path";

test.describe("Upload File", () => {
  let cartPage: CartPage;

  const fileName = ["imagen.jpeg", "sample.pdf", "sample2.pdf"];

  for (const name of fileName) {
    test(`Should upload a ${name} file`, async ({ page }) => {
      cartPage = new CartPage(page);
      // Open URL
      await cartPage.navigate();
      // Store test file path
      const filePath = path.join(__dirname, `../data/${name}`);
      // Upload test file
      await cartPage.uploadComponent().uploadFile(filePath);
      // Assertion
      await expect(cartPage.uploadComponent().successText).toContainText(
        "uploaded successfully",
        { timeout: 8000 }
      );
    });
  }
});
