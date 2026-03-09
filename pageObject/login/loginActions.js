import { LoginObjects } from "./loginObjects";
export class LoginActions {
  constructor(page) {
    this.page = page;
    this.loginObjects = new LoginObjects(page);
  }
  async clickOnSigninButton() {
    await this.loginObjects.buttonSignin.click();
  }
}
