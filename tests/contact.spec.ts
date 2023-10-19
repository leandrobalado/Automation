import { test, expect } from "@playwright/test";
import ContactPage from "../pages/contact.page";
import { faker } from "@faker-js/faker";

let contactPage: ContactPage;

// eslint-disable-next-line playwright/no-focused-test
test("Exercise No1 - Contact", async ({ page }) => {
  contactPage = new ContactPage(page);
  //Open URL
  await contactPage.navigate();
  // Go to Contact link
  await contactPage.contactBtn.click();
  // Fill the contact form and submit
  await contactPage.submitForm(
    faker.person.firstName(),
    faker.internet.email(),
    faker.phone.number(),
    faker.lorem.sentence()
  );

  // // Add a soft assertion [optional]
  // await expect
  //   .soft(page.getByRole("textbox", { name: "Message" }))
  //   .toHaveText("Fail test message");

  // expect(test.info().errors.length).toBeLessThanOrEqual(1);

  // Verify successfully submitted
  await expect(contactPage.alertMsg).toHaveText(
    "Thanks for contacting us! We will be in touch with you shortly"
  );
});
