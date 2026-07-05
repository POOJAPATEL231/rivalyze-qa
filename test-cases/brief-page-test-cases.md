# Brief Page UI Test Cases

This file is created for the Argus Brief Page.

Use this document as the source for generating Playwright automation scripts.

---

# Automation Instructions for GitHub Copilot / Codex

- Generate one Playwright test for each test case ID.
- Use `.env` for `BASE_URL`.
- Brief page URL should be `${BASE_URL}/brief`.
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

# Total Test Cases: 25

---

# BP-001 - Verify Brief Page loads successfully

**Page:** Brief Page

**Priority:** High

**Type:** UI

### Preconditions

Open the application Brief page URL.

### Test Steps

1. Launch the Brief page.

### Expected Result

- Brief page loads successfully.
- No blank screen is displayed.
- Main Brief page content is visible.

---

# BP-002 - Verify Argus logo and brand name are visible

**Page:** Brief Page

**Priority:** High

**Type:** UI

### Preconditions

Brief page is loaded.

### Test Steps

1. Observe the top-left header.

### Expected Result

- Argus logo is visible.
- Argus brand name is visible.

---

# BP-003 - Verify step navigation is displayed

**Page:** Brief Page

**Priority:** High

**Type:** UI

### Preconditions

Brief page is loaded.

### Test Steps

1. Observe the top navigation stepper.

### Expected Result

Following steps are visible:

- Brief
- Discovery
- Live run
- Dashboard
- Recommendations

---

# BP-004 - Verify Brief step is active

**Page:** Brief Page

**Priority:** High

**Type:** UI

### Preconditions

Brief page is loaded.

### Test Steps

1. Observe the stepper navigation.

### Expected Result

- Brief step is highlighted as active.
- Brief step shows number `01`.

---

# BP-005 - Verify locked steps are displayed correctly

**Page:** Brief Page

**Priority:** Medium

**Type:** UI

### Preconditions

Brief page is loaded.

### Test Steps

1. Observe Discovery, Live run, Dashboard, and Recommendations steps.

### Expected Result

- Locked steps show lock icons.
- Locked steps appear disabled or inactive.

---

# BP-006 - Verify theme toggle icon is visible

**Page:** Brief Page

**Priority:** Low

**Type:** UI

### Preconditions

Brief page is loaded.

### Test Steps

1. Observe the top-right header area.

### Expected Result

Theme toggle icon is visible.

---

# BP-007 - Verify logout icon is visible

**Page:** Brief Page

**Priority:** Low

**Type:** UI

### Preconditions

Brief page is loaded.

### Test Steps

1. Observe the top-right header area.

### Expected Result

Logout icon is visible.

---

# BP-008 - Verify hero eyebrow text is visible

**Page:** Brief Page

**Priority:** Medium

**Type:** UI

### Preconditions

Brief page is loaded.

### Test Steps

1. Observe the hero section.

### Expected Result

Text `COMPETITIVE INTELLIGENCE, AUTOMATED` is visible.

---

# BP-009 - Verify main hero heading is visible

**Page:** Brief Page

**Priority:** High

**Type:** UI

### Preconditions

Brief page is loaded.

### Test Steps

1. Observe the main hero section.

### Expected Result

Heading `Shape your strategy before your rivals do.` is visible.

---

# BP-010 - Verify hero description is visible

**Page:** Brief Page

**Priority:** Medium

**Type:** UI

### Preconditions

Brief page is loaded.

### Test Steps

1. Observe the text below the main heading.

### Expected Result

Hero description about AI agents researching the market is visible.

---

# BP-011 - Verify Company name input is visible

**Page:** Brief Page

**Priority:** High

**Type:** UI

### Preconditions

Brief page is loaded.

### Test Steps

1. Observe the form fields.

### Expected Result

- Company name label is visible.
- Company name input is visible.
- Placeholder `e.g. Notion` is visible.

---

# BP-012 - Verify Domain input is visible

**Page:** Brief Page

**Priority:** High

**Type:** UI

### Preconditions

Brief page is loaded.

### Test Steps

1. Observe the form fields.

### Expected Result

- Domain label is visible.
- Domain input is visible.
- Placeholder `e.g. notion.so` is visible.

---

# BP-013 - Verify suggested company chips are visible

**Page:** Brief Page

**Priority:** Medium

**Type:** UI

### Preconditions

Brief page is loaded.

### Test Steps

1. Observe the suggestion chips below the input fields.

### Expected Result

Following suggestion chips are visible:

- Notion
- Figma
- Zomato

---

# BP-014 - Verify Start intelligence scan button is visible

**Page:** Brief Page

**Priority:** High

**Type:** UI

### Preconditions

Brief page is loaded.

### Test Steps

1. Observe the main form CTA.

### Expected Result

`Start intelligence scan` button is visible.

---

# BP-015 - Verify user can enter company name

**Page:** Brief Page

**Priority:** High

**Type:** Functional UI

### Preconditions

Brief page is loaded.

### Test Steps

1. Click the Company name input.
2. Enter `Notion`.

### Expected Result

Company name input accepts the entered value.

---

# BP-016 - Verify user can enter domain name

**Page:** Brief Page

**Priority:** High

**Type:** Functional UI

### Preconditions

Brief page is loaded.

### Test Steps

1. Click the Domain input.
2. Enter `notion.so`.

### Expected Result

Domain input accepts the entered value.

---

# BP-017 - Verify clicking suggested company chip fills form data

**Page:** Brief Page

**Priority:** Medium

**Type:** Functional UI

### Preconditions

Brief page is loaded.

### Test Steps

1. Click the `Notion` suggestion chip.

### Expected Result

- Company name field is populated with Notion or related value.
- Domain field is populated with Notion domain if implemented.

---

# BP-018 - Verify stats section is visible

**Page:** Brief Page

**Priority:** Medium

**Type:** UI

### Preconditions

Brief page is loaded.

### Test Steps

1. Observe the stats section below the form.

### Expected Result

Following stats are visible:

- `5`
- `40+`
- `<10 min`

---

# BP-019 - Verify How it works section is visible

**Page:** Brief Page

**Priority:** Medium

**Type:** UI

### Preconditions

Brief page is loaded.

### Test Steps

1. Scroll or observe below the stats section.

### Expected Result

`How it works` heading is visible.

---

# BP-020 - Verify How it works cards are displayed

**Page:** Brief Page

**Priority:** Medium

**Type:** UI

### Preconditions

Brief page is loaded.

### Test Steps

1. Observe the How it works section.

### Expected Result

Following cards are visible:

- Brief
- Discovery
- Live run
- Report
