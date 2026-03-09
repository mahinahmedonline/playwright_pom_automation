import test, { expect } from "@playwright/test";
import { Utils } from "../utility/utilities";
import { RegistrationActions } from "../pageObject/registration/registrationActions";
import { Logout } from "../pageObject/logout/logoutActions";

const fullName = "John Doe";
let email = "";
const password = "Password123!";

test.describe("Registration Test", () => {
  let registration, utils, logout;
  test.beforeEach(({ page }) => {
    registration = new RegistrationActions(page);
    utils = new Utils(page);
    logout = new Logout(page);
  });
  test("register new user successfully", async ({ page }) => {
    await page.goto("https://demo.evershop.io/");
    await page.waitForTimeout(2000);
    await registration.clickOnAccountIcon();
    await page.waitForTimeout(2000);
    expect(page.url()).toBe("https://demo.evershop.io/account/login");
    //expect(page).toHaveTitle("Login");
    await registration.clickOnCreateAccLink();
    await page.waitForTimeout(2000);
    expect(page.url()).toBe("https://demo.evershop.io/account/register");
    //expect(page).toHaveTitle("Create an account");
    await registration.enterFullName(fullName);
    await page.waitForTimeout(2000);
    global.email = utils.getRandomEmailAddress();
    email = utils.getRandomEmailAddress();
    await page.waitForTimeout(2000);
    await registration.enterEmail(email);
    await page.waitForTimeout(2000);
    await registration.enterPassword(password);
    await page.waitForTimeout(2000);
    await registration.clickOnSignupButton();
    await page.waitForTimeout(2000);
    //expect(page.url()).toBe("https://demo.evershop.io");
    await registration.clickOnAccountIcon();
    await page.waitForTimeout(2000);
    await logout.clickOnLogout();
  });

  test.skip("logout successfully", async ({ page }) => {
    await page.pause(2000);
    //await page.goto("https://demo.evershop.io/");
    await registration.clickOnAccountIcon();
    await logout.clickOnLogout();
  });

  test.skip("register new user unsuccessfully", async ({ page }) => {
    await page.goto("https://demo.evershop.io/");
    await registration.clickOnAccountIcon();
    await registration.clickOnCreateAccLink();
    await page.waitForTimeout(2000);
    await registration.enterFullName(fullName);
    await registration.enterEmail("email");
    await registration.enterPassword(password);
    await page.waitForTimeout(2000);
    await registration.clickOnSignupButton();
    const expectedText = "Please enter a valid email address";
    const actualText = await registration.getInvalidEmailText();
    expect(actualText).toEqual(expectedText);
  });
});
