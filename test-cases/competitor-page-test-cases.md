# Competitor Page UI Test Cases

This file is created for the Argus Competitor Page.

Use this document as the source for generating Playwright automation scripts.

---

# Automation Instructions for GitHub Copilot / Codex

- Generate one Playwright test for each test case ID.
- Use `.env` for `BASE_URL`.
- Competitor page URL should be `${BASE_URL}/competitors`.
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

# Total Test Cases: 04

---

# CP-001 - Verify Back button is visible

**Page:** Competitor Page

**Priority:** High

**Type:** UI

### Preconditions

Competitor page is loaded.

### Test Steps

1. Observe the top-left area of the page.

### Expected Result

- Back button is visible.
- Back arrow icon is visible.
- Back text is visible.

---

# CP-002 - Verify page subtitle is displayed correctly

**Page:** Competitor Page

**Priority:** Medium

**Type:** UI

### Preconditions

Competitor page is loaded.

### Test Steps

1. Observe the text below the heading.

### Expected Result

- Subtitle is visible.
- Subtitle text says `We mapped your competitive set from public signals. Remove anything that doesn’t belong before the agents start digging.`

---

# CP-003 - Verify Deploy the agents button is visible

**Page:** Competitor Page

**Priority:** High

**Type:** UI

### Preconditions

Competitor page is loaded.

### Test Steps

1. Observe the bottom of the confirmed competitor set panel.

### Expected Result

- `Deploy the agents` button is visible.
- Rocket icon is visible on the button.
- Button has gradient styling.

---

# CP-004 - Verify Deploy the agents button is enabled when competitors exist

**Page:** Competitor Page

**Priority:** High

**Type:** UI

### Preconditions

Competitor page is loaded with at least one competitor selected.

### Test Steps

1. Observe the `Deploy the agents` button.

### Expected Result

- Deploy button is enabled.
- User can click the button.
