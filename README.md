# Rivalyze — QA Test Automation Suite

**Team:** Team Argus · Simform CodeClash 2026
**Framework:** Playwright + TypeScript
**Schema Validation:** Zod

---

## 📌 About Rivalyze

Rivalyze is an AI-powered competitive intelligence platform that helps users generate strategic, boardroom-ready competitive briefs. Given a company name or product idea, Rivalyze deploys a coordinated set of AI agents to discover and validate competitors, runs a multi-stage analysis pipeline, and produces a report containing SWOT analysis, head-to-head comparisons, and confidence-scored evidence.

This repository contains the **automated and manual QA suite** for Rivalyze — covering UI, functional, validation, security, API/contract, and responsive testing across all core pages of the application.

---

## 📁 Project Structure

```
HACKATHON/
├── pages/                          # Page Object Model (POM) classes
│   ├── heroPage.ts
│   └── loginPage.ts
│
├── playwright/
│   └── .auth/
│       └── user.json               # Saved authenticated session state
│
├── playwright-report/              # Auto-generated HTML test report
│   ├── data/
│   ├── trace/
│   └── index.html
│
├── test-app/                       # Application-under-test helpers/mocks
│
├── test-cases/                     # Manual test case documentation (Markdown)
│   ├── brief-page-test-cases.md
│   ├── competitor-page-test-cases.md
│   ├── Dashboard-test-cases.md
│   ├── discoveryPage-test-cases.md
│   ├── hero-functional-test-cases.md
│   ├── hero-page-test-cases.md
│   ├── login-functional-test-cases.md
│   └── login-page-test-cases.md
│
├── test-data/                      # Static/synthetic test data sets
│
├── test-results/                   # Raw output from the latest test run
│
├── tests/                          # Automated Playwright spec files
│   ├── auth.setup.spec.ts          # Login/session bootstrap for authenticated tests
│   ├── briefPageUI.spec.ts
│   ├── competiter.spec.ts
│   ├── dashboard.spec.ts
│   ├── heroPageFunction.spec.ts
│   ├── heroPageUI.spec.ts
│   ├── loginPageFunction.spec.ts
│   └── loginPageUI.spec.ts
│
├── .env                            # Environment variables (base URL, credentials, etc.)
├── .gitignore
├── hero_page.xlsx                  # Test case tracking sheet (Hero page)
├── package.json
├── package-lock.json
├── playwright.config.ts            # Playwright project configuration
├── playwright-report.zip           # Archived HTML report snapshot
├── Rivalyze_QA_Test_Execution_Report.pdf
├── Rivalyze_Software_Test_Plan.pdf
└── README.md
```

---

## 🧪 Test Coverage

| Module              | Test Type(s)                                   | Spec File(s)                                      |
|---------------------|-------------------------------------------------|----------------------------------------------------|
| Hero / Landing Page | UI, Functional, Responsive, Smoke               | `heroPageUI.spec.ts`, `heroPageFunction.spec.ts`    |
| Login               | UI, Functional, Validation, Security            | `loginPageUI.spec.ts`, `loginPageFunction.spec.ts`  |
| Brief Page          | UI, Functional, Validation                      | `briefPageUI.spec.ts`                               |
| Competitor Page     | UI, Functional                                  | `competiter.spec.ts`                                |
| Discovery & Run     | Functional, API/Contract, Responsive            | *(covered under contract + functional suites)*      |
| Dashboard           | UI, Smoke                                       | `dashboard.spec.ts`                                 |
| Auth Bootstrap      | Session setup for authenticated test runs       | `auth.setup.spec.ts`                                |

Full manual test case details (Preconditions → Test Steps → Expected Result) are documented per module in [`test-cases/`](./test-cases).

Reference documents:
- 📄 [`Rivalyze_Software_Test_Plan.pdf`](./Rivalyze_Software_Test_Plan.pdf) — full test plan (scope, strategy, entry/exit criteria, schedule, risks)
- 📄 [`Rivalyze_QA_Test_Execution_Report.pdf`](./Rivalyze_QA_Test_Execution_Report.pdf) — execution summary and results

---

## ⚙️ Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- npm (bundled with Node.js)

---

## 🚀 Getting Started

**1. Install dependencies**
```bash
npm install
```

**2. Install Playwright browsers**
```bash
npx playwright install
```

**3. Configure environment variables**

Create/update the `.env` file in the project root with the required values, e.g.:
```
BASE_URL=https://staging.rivalyze.app
TEST_USER_EMAIL=your-test-user@example.com
TEST_USER_PASSWORD=your-test-password
```

**4. Run the full test suite**
```bash
npx playwright test
```

**5. Run a specific spec file**
```bash
npx playwright test tests/heroPageUI.spec.ts
```

**6. Run tests in headed mode (visible browser)**
```bash
npx playwright test --headed
```

**7. Run tests on a specific browser**
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

---

## 📊 Viewing Test Reports

After a test run, Playwright generates an HTML report:

```bash
npx playwright show-report
```

This opens `playwright-report/index.html` in your browser, showing pass/fail status, execution traces, and screenshots for each test.

A snapshot of a previous run is archived as `playwright-report.zip`.

---

## 🔐 Authentication Handling

`tests/auth.setup.spec.ts` runs once before the authenticated test suites to log in and persist the session to `playwright/.auth/user.json`. Subsequent specs reuse this saved state instead of logging in repeatedly, per Playwright's [authentication reuse pattern](https://playwright.dev/docs/auth).

---

## 🧰 Tech Stack

| Tool                | Purpose                                         |
|---------------------|--------------------------------------------------|
| Playwright          | End-to-end browser automation                    |
| TypeScript          | Type-safe test authoring                         |
| Zod                 | API response schema validation (contract tests)  |
| GitHub Actions       | CI/CD pipeline for automated test execution      |

---

## 👥 Team Argus

| Name                | Role         |
|----------------------|-------------|
| Rushabh Sorathiya    | QA Engineer |
| Hely Kikani          | QA Trainee  |
| Dhruv Sonagara       | QA Trainee  |

---

## 📄 License

This repository is internal QA documentation and automation for the Rivalyze project, developed for Simform's CodeClash 2026 hackathon. Confidential — not for external distribution.
