export class LoginObjects {
  constructor(page) {
    this.page = page;
    this.buttonSignin = this.page.locator(
      "//button[contains(text(),'Sign In')]",
    );
  }
}
