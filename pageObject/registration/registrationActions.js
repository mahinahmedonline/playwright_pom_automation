import { get } from "node:http";
import { RegistrationObjects } from "./registrationObjects";
export class RegistrationActions {
  constructor(page) {
    this.page = page;
    this.locators = new RegistrationObjects(page);
  }
  async clickOnAccountIcon() {
    await this.locators.accountIcon.click();
  }
  async clickOnCreateAccLink() {
    await this.locators.registrationLink.click();
  }
  async enterFullName(fullname) {
    await this.locators.fullnameInput.type(fullname);
  }
  async enterEmail(email) {
    await this.locators.emailInput.type(email);
  }
  async enterPassword(password) {
    await this.locators.passwordInput.type(password);
  }
  async clickOnSignupButton() {
    await this.locators.buttonSignup.click();
  }
  async getInvalidEmailText() {
    const invalidText = await this.locators.invalidEmail.innerText();
    console.log("inner text: ${invalidText}");
    return invalidText;
  }
}
