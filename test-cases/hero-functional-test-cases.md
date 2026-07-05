# Argus Functional Test Cases

This file is created for the Argus landing page functional flows.

Use this document as the source for generating Playwright automation scripts.

---

# Automation Instructions for GitHub Copilot / Codex

- Generate one Playwright test for each test case ID.
- Use `.env` for `BASE_URL`.
- Prefer user-facing locators:
  - `getByRole()`
  - `getByText()`
  - `getByLabel()`
  - `getByPlaceholder()`
- Use `data-testid` only if available.
- Avoid XPath unless no semantic locator exists.
- Keep each test independent.
- Use descriptive assertions.
- Follow Page Object Model, for example:
  - `pages/landingPage.ts`
  - `pages/loginPage.ts`
  - `pages/signupPage.ts`
- Test titles should follow:

```ts
[TC-ID] Scenario
```

---

# Total Test Cases: 22

---

# AF-001 - Verify How It Works navigation opens correct section

**Page:** Landing Page

**Priority:** High

**Type:** Functional

### Preconditions

Application is opened on the landing page.

### Test Steps

1. Click on the **How It Works** navigation link.

### Expected Result

- URL should contain `#how-it-works`.
- How It Works section should be visible.
- Heading **From Question To Strategy In Minutes** should be displayed.

---

# AF-002 - Verify Product navigation opens correct section

**Page:** Landing Page

**Priority:** High

**Type:** Functional

### Preconditions

Application is opened on the landing page.

### Test Steps

1. Click on the **Product** navigation link.

### Expected Result

- URL should contain `#showcase`.
- Product section should be visible.
- Heading **A Boardroom-Ready Brief** should be displayed.

---

# AF-003 - Verify clicking Start Analysis button performs expected action from hero section

**Page:** Landing Page

**Priority:** High

**Type:** Functional

### Preconditions

Application is opened on the landing page.

### Test Steps

1. Click on the **Start Analysis** button in the hero section.

### Expected Result

- User should be redirected to the analysis/start flow if implemented.
- If the button is an anchor, correct target section/page should open.
- No broken navigation or blank screen should appear.

---

# AF-004 - Verify Watch Demo button opens showcase/product section

**Page:** Landing Page

**Priority:** High

**Type:** Functional

### Preconditions

Application is opened on the landing page.

### Test Steps

1. Click on the **Watch Demo** button.

### Expected Result

- URL should contain `#showcase`.
- Product showcase section should be visible.
- Heading **A Boardroom-Ready Brief** should be displayed.

---

# AF-005 - Verify theme toggle changes dark theme to light theme

**Page:** Landing Page

**Priority:** High

**Type:** Functional

### Preconditions

Application is opened in dark theme.

### Test Steps

1. Click on the theme toggle icon in the header.

### Expected Result

- Theme should change from dark mode to light mode.
- Page background/text styling should update.
- Application should remain usable after theme change.

---

# AF-006 - Verify theme toggle changes light theme back to dark theme

**Page:** Landing Page

**Priority:** Medium

**Type:** Functional

### Preconditions

Application is opened and light theme is active.

### Test Steps

1. Click on the theme toggle icon again.

### Expected Result

- Theme should change back to dark mode.
- Page background/text styling should update.
- Application should remain usable after theme change.

---

# AF-07 - Verify How It Works section content is displayed correctly

**Page:** Landing Page

**Priority:** Medium

**Type:** Functional

### Preconditions

User is on the How It Works section.

### Test Steps

1. Navigate to **How It Works** section.
2. Observe the section content.

### Expected Result

Following content should be visible:

- **Enter a company or startup idea.**
- **Watch 5 AI agents work simultaneously.**
- **Receive a strategic brief.**
- Agent cards should be displayed.

---

# AF-008 - Verify Product section content is displayed correctly

**Page:** Landing Page

**Priority:** Medium

**Type:** Functional

### Preconditions

User is on the Product section.

### Test Steps

1. Navigate to **Product** section.
2. Observe the section content.

### Expected Result

Following content should be visible:

- **A Boardroom-Ready Brief**
- **Executive Summary**
- **SWOT Analysis**
- **Head-to-Head**
- Confidence score card should be visible.

---

# AF-009 - Verify final CTA Start Analysis button is clickable

**Page:** Landing Page

**Priority:** Medium

**Type:** Functional

### Preconditions

User is on the Roadmap/final CTA area.

### Test Steps

1. Scroll or navigate to the Roadmap section.
2. Click the final **Start Analysis** button.

### Expected Result

- Correct analysis/start flow should open if implemented.
- No broken navigation should occur.
- Page should not display any error.

# Argus Functional Test Cases

This file is created for the Argus landing page functional flows.

Use this document as the source for generating Playwright automation scripts.

---
