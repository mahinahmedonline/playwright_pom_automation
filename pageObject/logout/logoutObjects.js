export class LogoutObjects {
  constructor(page) {
    this.page = page;
    this.logout = this.page.locator("//a[contains(text(),'Logout')]");
  }
}
