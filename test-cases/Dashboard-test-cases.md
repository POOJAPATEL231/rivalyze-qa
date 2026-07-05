# Dashboard Page UI Test Cases

This file is created for the Argus Dashboard Page.

Use this document as the source for generating Playwright automation scripts.

---

# Automation Instructions for GitHub Copilot / Codex

- Generate one Playwright test for each test case ID.
- Use `.env` for `BASE_URL`.
- Dashboard page URL should be `${BASE_URL}/dashboard`.
- If the actual route is different, update only the page URL in the Page Object file.
- Prefer user-facing locators:
  - getByRole()
  - getByText()
  - getByLabel()
  - getByPlaceholder()
- Use `data-testid` only if available.
- Avoid XPath unless no semantic locator exists.
- Keep each test independent.
- Use descriptive assertions.
- Follow Page Object Model POM.
- Test titles should follow:

[TC-ID] Scenario

---

# Total Test Cases: 12

---

# DP-001 - Verify Dashboard Page loads successfully

**Page:** Dashboard Page

**Priority:** High

**Type:** UI

### Preconditions

Open the application Dashboard page URL.

### Test Steps

1. Launch the Dashboard page.

### Expected Result

- Dashboard page loads successfully.
- No blank screen is displayed.
- Main dashboard content is visible.

---

# DP-002 - Verify page subtitle is displayed

**Page:** Dashboard Page

**Priority:** Medium

**Type:** UI

### Preconditions

Dashboard page is loaded.

### Test Steps

1. Observe the text below the main heading.

### Expected Result

- Subtitle is visible.
- Subtitle explains that claims can be traced back to evidence or sources.
- Subtitle should not be empty.

---

# DP-003 - Verify Opportunities section is visible

**Page:** Dashboard Page

**Priority:** Medium

**Type:** UI

### Preconditions

Dashboard page is loaded.

### Test Steps

1. Scroll or observe the Opportunities section.

### Expected Result

- Opportunities section is visible when data is available.
- Section title is visible.
- Opportunity findings or an empty state is displayed properly.

---
