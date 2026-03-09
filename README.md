# Playwright POM Automation for Demo Evershop

This repository contains an automated end-to-end (E2E) testing framework developed using **Playwright** and **JavaScript**, structured around the **Page Object Model (POM)** design pattern. The project is designed with a strong focus on **Software Quality Assurance (SQA)** best practices, ensuring high maintainability, scalability, and robust test execution.

## SQA Focus & Key Features

- **Page Object Model (POM) Architecture**: Highly modular structure separating test logic (`specs`) from element locators and actions (`pageObject`), improving script maintenance and reusability.
- **Robust E2E Testing**: Comprehensive coverage of critical user journeys (e.g., Login, Registration).
- **Advanced Reporting**: Integrated with **Allure Reports** and Playwright's native HTML reporter, providing rich, interactive, and visually appealing test execution insights.
- **Utility Functions**: Reusable helper methods (e.g., generating random email addresses) centralized in the `utility` folder to avoid code duplication.
- **Cross-Browser Capability**: Configured for multiple browser environments (Chromium, Firefox, WebKit capabilities via `playwright.config.js`).
- **CI/CD Readiness**: Configuration includes CI-specific logic, such as automatic retries on failure and disabling `test.only` to prevent accidental skips in the pipeline.
- **Parallel Execution**: Playwright's native runner allows for fast and efficient test execution.

## Project Structure

```text
├── allure-report/       # Generated Allure HTML reports
├── allure-results/      # Raw Allure result data
├── pageObject/          # Page classes (Locators and Methods)
│   ├── login/           
│   ├── logout/          
│   ├── registration/    
│   └── search/          
├── specs/               # Test scripts (eE2E tests)
│   ├── login.specs.js
│   └── reg.specs.js
├── utility/             # Reusable helper functions
│   └── utilities.js
├── playwright-report/   # Playwright's default HTML report
├── playwright.config.js # Playwright framework configuration
└── package.json         # Project dependencies and NPM scripts
```

## Technology Stack

- **Automation Tool**: [Playwright](https://playwright.dev/)
- **Programming Language**: JavaScript (Node.js)
- **Design Pattern**: Page Object Model (POM)
- **Reporting**: Allure Reports, Playwright HTML Reporter

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd playwright_pom_automation
   ```

2. Install the necessary dependencies:
   ```bash
   npm install
   ```

3. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

## Test Execution

### Run all tests
To execute all test suites in headed mode (as configured in `package.json`):
```bash
npm run test
```

### Run tests in headless mode (default Playwright behavior)
```bash
npx playwright test
```

### Generate and Open Allure Report
After a test run, you can generate and view the Allure report using the following custom NPM script:
```bash
npm run getReport
```

## Quality Assurance Strategy

- **Test Isolation**: Each test runs in an isolated environment (Browser Context), eliminating state leakage between tests.
- **Dynamic Data Generation**: Utilized for fields like email addresses during registration to prevent data collision.
- **Validation & Assertions**: Extensive use of `expect` assertions (e.g., URL validation, UI text verification) to ensure the application state is strictly validated.
- **Maintainability**: Locator changes or UI updates only require modifications in the respective Page Object class, leaving the test scripts untouched.
