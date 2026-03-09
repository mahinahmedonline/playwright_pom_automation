import { expect, test } from "@playwright/test";
import { Utils } from "../utility/utilities";
import { LoginActions } from "../pageObject/login/loginActions";
import { RegistrationActions } from "../pageObject/registration/registrationActions";
const email = global.email;
const password = "Password123!";
test.describe("Login Test", () => {
  let registration, login;
  test.beforeEach(async ({ page }) => {
    login = new LoginActions(page);
    registration = new RegistrationActions(page);
  });
  test("login with valid credentials", async ({ page }) => {
    page.goto("https://demo.evershop.io/");
    await registration.clickOnAccountIcon();
    await registration.enterEmail(email);
    await registration.enterPassword(password);
    await login.clickOnSigninButton();
  });
  test("login with invalid credentials", async ({ page }) => {
    page.goto("https://demo.evershop.io/");
    await registration.clickOnAccountIcon();
    await registration.enterEmail("email");
    await registration.enterPassword(password);
    await login.clickOnSigninButton();
  });
});
