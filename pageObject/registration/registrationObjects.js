export class RegistrationObjects {
  constructor(page) {
    this.page = page;
    this.accountIcon = this.page.locator(
      "//div[@class='self-center customer-icon']",
    );
    this.registrationLink = this.page.locator(
      "//a[@class='text-interactive hover:underline']",
    );
    this.fullnameInput = this.page.locator("//input[@name='full_name']");
    this.emailInput = this.page.locator("//input[@name='email']");
    this.passwordInput = this.page.locator("//input[@name='password']");
    this.buttonSignup = this.page.locator(
      "//button[contains(text(),'Sign Up')]",
    );
    this.invalidEmail = this.page.locator(
      "//div[contains(text(),'valid email')]",
    );
  }
}
