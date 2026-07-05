# Hero Page UI Test Cases

This file is created for the Argus Hero Page.

Use this document as the source for generating Playwright automation scripts.

---

# Automation Instructions for GitHub Copilot / Codex

- Generate one Playwright test for each test case ID.
- Use `.env` for `BASE_URL`.
- Prefer user-facing locators:
  - getByRole()
  - getByText()
  - getByLabel()
  - getByPlaceholder()
- Use `data-testid` only if available.
- Avoid XPath unless no semantic locator exists.
- Keep each test independent.
- Use descriptive assertions.
- Follow Page Object Model (POM).
- Test titles should follow:

```
[TC-ID] Scenario
```

---

# Total Test Cases: 25

---

# HP-001 - Verify Hero Page loads successfully

**Page:** Hero Page

**Priority:** High

**Type:** UI

### Preconditions

Open the application URL.

### Test Steps

1. Launch the application.

### Expected Result

- Hero page loads successfully.
- No blank screen is displayed.
- No console error blocks rendering.

---

# HP-002 - Verify Argus logo is visible

**Page:** Hero Page

**Priority:** High

**Type:** UI

### Preconditions

Hero page is loaded.

### Test Steps

1. Observe the top-left header.

### Expected Result

Argus logo and branding are visible.

---

# HP-003 - Verify navigation menu items are displayed

**Page:** Hero Page

**Priority:** High

**Type:** UI

### Preconditions

Hero page is loaded.

### Test Steps

1. Observe the navigation bar.

### Expected Result

Following menu items are visible:

- How It Works
- Evidence
- Product
- Roadmap

---

# HP-004 - Verify header Start Analysis button

**Page:** Hero Page

**Priority:** High

**Type:** UI

### Preconditions

Hero page is loaded.

### Test Steps

1. Observe the header CTA.

### Expected Result

Start Analysis button is visible and enabled.

---

# HP-005 - Verify hero status badge

**Page:** Hero Page

**Priority:** Medium

**Type:** UI

### Preconditions

Hero page is loaded.

### Test Steps

1. Observe the badge above headline.

### Expected Result

"5 AGENTS LIVE" badge is visible.

---

# HP-006 - Verify hero headline

**Page:** Hero Page

**Priority:** High

**Type:** UI

### Preconditions

Hero page is loaded.

### Test Steps

1. Observe the hero title.

### Expected Result

Headline

"Stop Guessing What Competitors Are Doing."

is displayed correctly.

---

# HP-007 - Verify highlighted text styling

**Page:** Hero Page

**Priority:** Medium

**Type:** UI

### Preconditions

Hero page is loaded.

### Test Steps

1. Observe highlighted word.

### Expected Result

"Competitors" is highlighted with the expected styling.

---

# HP-008 - Verify hero description

**Page:** Hero Page

**Priority:** High

**Type:** UI

### Preconditions

Hero page is loaded.

### Test Steps

1. Read the description.

### Expected Result

Description explaining AI agents, competitor discovery and recommendations is displayed.

---

# HP-009 - Verify Start Analysis CTA

**Page:** Hero Page

**Priority:** High

**Type:** Functional

### Preconditions

Hero page is loaded.

### Test Steps

1. Locate Start Analysis button.

### Expected Result

Button is visible, enabled and clickable.

---

# HP-010 - Verify Watch Demo CTA

**Page:** Hero Page

**Priority:** High

**Type:** Functional

### Preconditions

Hero page is loaded.

### Test Steps

1. Locate Watch Demo button.

### Expected Result

Button is visible, enabled and clickable.

---

# HP-011 - Verify Start Analysis button action

**Page:** Hero Page

**Priority:** High

**Type:** Functional

### Preconditions

Hero page is loaded.

### Test Steps

1. Click Start Analysis.

### Expected Result

User is navigated to the expected workflow/page.

---

# HP-012 - Verify Watch Demo button action

**Page:** Hero Page

**Priority:** High

**Type:** Functional

### Preconditions

Hero page is loaded.

### Test Steps

1. Click Watch Demo.

### Expected Result

Demo page, modal or video opens successfully.

---

# HP-013 - Verify feature badges below CTA

**Page:** Hero Page

**Priority:** Medium

**Type:** UI

### Preconditions

Hero page is loaded.

### Test Steps

1. Observe feature list.

### Expected Result

Following are visible:

- Every Claim Verified
- Click-To-Evidence
- Honest Confidence Scores
- 2-Minute Analysis

---

# HP-014 - Verify Threat Score card

**Page:** Hero Page

**Priority:** High

**Type:** UI

### Preconditions

Hero page is loaded.

### Test Steps

1. Observe Threat Score card.

### Expected Result

Threat Score card is displayed.

---

# HP-015 - Verify Threat Score value

**Page:** Hero Page

**Priority:** Medium

**Type:** UI

### Preconditions

Hero page is loaded.

### Test Steps

1. Observe score.

### Expected Result

Value "72" is displayed.

---

# HP-016 - Verify Confidence card

**Page:** Hero Page

**Priority:** High

**Type:** UI

### Preconditions

Hero page is loaded.

### Test Steps

1. Observe Confidence card.

### Expected Result

Confidence card is visible.

---

# HP-017 - Verify Confidence percentage

**Page:** Hero Page

**Priority:** Medium

**Type:** UI

### Preconditions

Hero page is loaded.

### Test Steps

1. Observe confidence value.

### Expected Result

72% confidence is displayed.

---

# HP-018 - Verify Evidence Verified card

**Page:** Hero Page

**Priority:** High

**Type:** UI

### Preconditions

Hero page is loaded.

### Test Steps

1. Observe Evidence card.

### Expected Result

Evidence Verified card is visible.

---

# HP-019 - Verify Evidence count

**Page:** Hero Page

**Priority:** Medium

**Type:** UI

### Preconditions

Hero page is loaded.

### Test Steps

1. Observe evidence value.

### Expected Result

18/18 is displayed.

---

# HP-020 - Verify Agent Active card

**Page:** Hero Page

**Priority:** Medium

**Type:** UI

### Preconditions

Hero page is loaded.

### Test Steps

1. Observe Agent Active widget.

### Expected Result

Agent Active card is displayed.

---

# HP-021 - Verify Research Agent text

**Page:** Hero Page

**Priority:** Medium

**Type:** UI

### Preconditions

Hero page is loaded.

### Test Steps

1. Observe Agent Active card.

### Expected Result

Research Agent text is visible.

---

# HP-022 - Verify animated progress indicator

**Page:** Hero Page

**Priority:** Low

**Type:** UI

### Preconditions

Hero page is loaded.

### Test Steps

1. Observe circular progress.

### Expected Result

Circular indicator renders correctly without UI issues.

---

# HP-023 - Verify background illustration

**Page:** Hero Page

**Priority:** Medium

**Type:** UI

### Preconditions

Hero page is loaded.

### Test Steps

1. Observe background.

### Expected Result

Background illustration loads correctly without distortion.

---

# HP-024 - Verify page responsiveness on desktop

**Page:** Hero Page

**Priority:** Medium

**Type:** Responsive UI

### Preconditions

Hero page is loaded.

### Test Steps

1. View page on desktop resolution.

### Expected Result

No overlapping or broken UI components are present.

---

# HP-025 - Verify overall Hero section rendering

**Page:** Hero Page

**Priority:** High

**Type:** Smoke

### Preconditions

Hero page is loaded.

### Test Steps

1. Observe complete Hero section.

### Expected Result

All primary UI components render correctly including:

- Header
- Hero headline
- Description
- CTA buttons
- Metric cards
- Background graphics
- Feature badges

Hero page appears production ready.

---
