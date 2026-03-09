import { LogoutObjects } from "./logoutObjects";
export class Logout {
  constructor(page) {
    this.page = page;
    this.locators = new LogoutObjects(page);
  }
  async clickOnLogout() {
    await this.locators.logout.click();
  }
}
