
# Discovery & Run Page UI Test Cases

This file is created for the Argus Discovery & Run Page.

Use this document as the source for generating Playwright automation scripts.

---

# Automation Instructions for GitHub Copilot / Codex

- Generate one Playwright test for each test case ID.
- Use `.env` for `BASE_URL`.
- Discovery & Run page URL should be `${BASE_URL}/discovery`.
- If the actual route is different, update only the page URL in the Page Object file.
- Keep test data generic because competitor results may change depending on the company/brief.
- Do not assert fixed competitor names such as Figma, Uber, DoorDash, etc.
- Do not assert fixed competitor descriptions because some companies may have missing or short descriptions.
- Prefer validating structure, visibility, count behavior, and navigation instead of exact dynamic content.
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

# Total Test Cases: 30

---

# DR-001 - Verify Discovery & Run page loads successfully

**Page:** Discovery & Run Page

**Priority:** High

**Type:** UI

### Preconditions

Open the application Discovery & Run page URL.

### Test Steps

1. Launch the Discovery & Run page.

### Expected Result

- Discovery & Run page loads successfully.
- No blank screen is displayed.
- Main page content is visible.
- No unexpected application error is displayed.

---

# DR-002 - Verify Argus branding is visible

**Page:** Discovery & Run Page

**Priority:** High

**Type:** UI

### Preconditions

Discovery & Run page is loaded.

### Test Steps

1. Observe the top-left header area.

### Expected Result

- Argus logo is visible.
- Brand name `Argus` is visible.
- Branding is aligned properly in the header.

---

# DR-003 - Verify step navigation is displayed

**Page:** Discovery & Run Page

**Priority:** High

**Type:** UI

### Preconditions

Discovery & Run page is loaded.

### Test Steps

1. Observe the top step navigation bar.

### Expected Result

- Step navigation is visible.
- Steps for Brief, Discovery & Run, Dashboard, and Recommendations are visible.
- Step numbers or indicators are visible.

---

# DR-004 - Verify Discovery & Run step is active

**Page:** Discovery & Run Page

**Priority:** High

**Type:** UI

### Preconditions

Discovery & Run page is loaded.

### Test Steps

1. Observe the step navigation bar.

### Expected Result

- Discovery & Run step is highlighted as the active step.
- Previous Brief step appears completed or accessible.
- Future steps appear inactive, disabled, or locked as per design.

---

# DR-005 - Verify page heading is displayed

**Page:** Discovery & Run Page

**Priority:** High

**Type:** UI

### Preconditions

Discovery & Run page is loaded.

### Test Steps

1. Observe the main heading area.

### Expected Result

- Heading `Here’s who you’re up against` is visible.
- Heading is displayed prominently.
- Heading is not truncated or overlapped.

---

# DR-006 - Verify page subtitle is displayed

**Page:** Discovery & Run Page

**Priority:** Medium

**Type:** UI

### Preconditions

Discovery & Run page is loaded.

### Test Steps

1. Observe the text below the heading.

### Expected Result

- Subtitle is visible.
- Subtitle explains that the competitive set was mapped from public signals.
- Subtitle is readable and not truncated.

---

# DR-007 - Verify competitor map section is visible

**Page:** Discovery & Run Page

**Priority:** High

**Type:** UI

### Preconditions

Discovery & Run page is loaded.

### Test Steps

1. Observe the left/main visual map area.

### Expected Result

- Competitor map section is visible.
- Circular/radar style map area is displayed.
- Map does not overlap with the competitor panel.

---

# DR-008 - Verify center company node is visible

**Page:** Discovery & Run Page

**Priority:** High

**Type:** UI

### Preconditions

Discovery & Run page is loaded.

### Test Steps

1. Observe the center of the competitor map.

### Expected Result

- Center company node is visible.
- Company initial, icon, or logo is visible inside the node.
- Company name/label is visible near the center node when available.

---

# DR-009 - Verify competitor nodes are displayed on map when competitors exist

**Page:** Discovery & Run Page

**Priority:** High

**Type:** UI

### Preconditions

Discovery & Run page is loaded with one or more competitors.

### Test Steps

1. Observe the competitor map area.

### Expected Result

- One or more competitor node markers are visible.
- Competitor labels are visible where data is available.
- Nodes are positioned around the center company node.

---

# DR-010 - Verify competitor map handles missing competitor data gracefully

**Page:** Discovery & Run Page

**Priority:** Medium

**Type:** UI

### Preconditions

Discovery & Run page is loaded for a company with limited competitor data.

### Test Steps

1. Observe the competitor map area.

### Expected Result

- Page does not crash when fewer competitors are available.
- Map remains visible or an appropriate empty/limited state is shown.
- No broken labels, undefined text, or null values are displayed.

---

# DR-011 - Verify confirmed competitor set panel is visible

**Page:** Discovery & Run Page

**Priority:** High

**Type:** UI

### Preconditions

Discovery & Run page is loaded.

### Test Steps

1. Observe the right side panel.

### Expected Result

- Confirmed competitor set panel is visible.
- Panel title `Confirmed competitor set` is visible.
- Panel border, spacing, and layout are displayed correctly.

---

# DR-012 - Verify competitor count badge is visible

**Page:** Discovery & Run Page

**Priority:** High

**Type:** UI

### Preconditions

Discovery & Run page is loaded.

### Test Steps

1. Observe the count badge near the panel title.

### Expected Result

- Competitor count badge is visible.
- Badge displays count in a readable format such as `N of N`.
- Count value matches the number of displayed competitor cards when competitors exist.

---

# DR-013 - Verify competitor cards are displayed in the panel

**Page:** Discovery & Run Page

**Priority:** High

**Type:** UI

### Preconditions

Discovery & Run page is loaded with one or more competitors.

### Test Steps

1. Observe the confirmed competitor set panel.

### Expected Result

- One or more competitor cards are visible.
- Each card is displayed inside the competitor set panel.
- Cards are separated clearly from each other.

---

# DR-014 - Verify competitor card contains a competitor name

**Page:** Discovery & Run Page

**Priority:** High

**Type:** UI

### Preconditions

Discovery & Run page is loaded with one or more competitors.

### Test Steps

1. Observe any competitor card.

### Expected Result

- Competitor name is visible on the card.
- Name text is readable.
- Name is not displayed as empty, undefined, or null.

---

# DR-015 - Verify competitor type badge is displayed when available

**Page:** Discovery & Run Page

**Priority:** Medium

**Type:** UI

### Preconditions

Discovery & Run page is loaded with competitor type data available.

### Test Steps

1. Observe competitor cards in the panel.

### Expected Result

- Competitor type badge is visible when type data exists.
- Badge text can be Direct, Indirect, or any supported competitor type.
- Badge is visually distinguishable from normal text.

---

# DR-016 - Verify competitor description is displayed when available

**Page:** Discovery & Run Page

**Priority:** Medium

**Type:** UI

### Preconditions

Discovery & Run page is loaded with competitor description data available.

### Test Steps

1. Observe competitor cards in the panel.

### Expected Result

- Description text is visible when description data exists.
- Description is readable.
- Description does not overflow outside the card.

---

# DR-017 - Verify missing competitor description does not break card layout

**Page:** Discovery & Run Page

**Priority:** Medium

**Type:** UI

### Preconditions

Discovery & Run page is loaded with one or more competitors that may not have a description.

### Test Steps

1. Observe competitor cards with missing or limited description data.

### Expected Result

- Card remains visible and properly aligned.
- Page does not display undefined, null, or broken placeholder text.
- Remove action remains visible for the card.

---

# DR-018 - Verify remove icon is visible on competitor cards

**Page:** Discovery & Run Page

**Priority:** High

**Type:** UI

### Preconditions

Discovery & Run page is loaded with one or more competitors.

### Test Steps

1. Observe each visible competitor card.

### Expected Result

- Remove icon/button is visible on each competitor card.
- Remove icon is aligned to the right side of the card.
- Remove icon is clickable or keyboard accessible.

---

# DR-019 - Verify removing any competitor updates the competitor count

**Page:** Discovery & Run Page

**Priority:** High

**Type:** Functional UI

### Preconditions

Discovery & Run page is loaded with at least two competitors.

### Test Steps

1. Capture the current competitor count.
2. Click the remove icon on any one competitor card.
3. Observe the competitor count badge.

### Expected Result

- Selected competitor is removed from the panel.
- Competitor count decreases by one.
- No page refresh or crash occurs.

---

# DR-020 - Verify removed competitor is no longer visible in the panel

**Page:** Discovery & Run Page

**Priority:** High

**Type:** Functional UI

### Preconditions

Discovery & Run page is loaded with one or more competitors.

### Test Steps

1. Capture the name of the first visible competitor card.
2. Click the remove icon on that card.
3. Observe the competitor set panel.

### Expected Result

- Removed competitor card is no longer visible in the panel.
- Remaining competitor cards stay visible.
- Panel layout is recalculated correctly.

---

# DR-021 - Verify competitor map updates after competitor removal

**Page:** Discovery & Run Page

**Priority:** Medium

**Type:** Functional UI

### Preconditions

Discovery & Run page is loaded with one or more competitors displayed on the map.

### Test Steps

1. Remove any competitor from the confirmed competitor set panel.
2. Observe the competitor map.

### Expected Result

- Removed competitor is no longer shown on the map if map is linked to selected competitors.
- Remaining competitor nodes are still visible.
- Map layout remains stable.

---

# DR-022 - Verify empty state after removing all competitors

**Page:** Discovery & Run Page

**Priority:** Medium

**Type:** Functional UI

### Preconditions

Discovery & Run page is loaded with removable competitors.

### Test Steps

1. Remove all visible competitor cards one by one.
2. Observe the competitor panel.

### Expected Result

- Panel handles zero competitors gracefully.
- Count badge updates to zero or an equivalent empty state.
- No broken UI, undefined text, or crash is shown.

---

# DR-023 - Verify Deploy the agents button is visible

**Page:** Discovery & Run Page

**Priority:** High

**Type:** UI

### Preconditions

Discovery & Run page is loaded.

### Test Steps

1. Observe the bottom of the confirmed competitor set panel.

### Expected Result

- `Deploy the agents` button is visible.
- Button text is readable.
- Button is aligned at the bottom of the panel.

---

# DR-024 - Verify Deploy the agents button is enabled when competitors exist

**Page:** Discovery & Run Page

**Priority:** High

**Type:** Functional UI

### Preconditions

Discovery & Run page is loaded with at least one competitor selected.

### Test Steps

1. Observe the `Deploy the agents` button.

### Expected Result

- Deploy button is enabled.
- User can click the button.
- Button does not appear disabled when competitors exist.

---

# DR-025 - Verify Deploy the agents button state when no competitors exist

**Page:** Discovery & Run Page

**Priority:** Medium

**Type:** Functional UI

### Preconditions

Discovery & Run page is loaded and all competitors can be removed.

### Test Steps

1. Remove all visible competitor cards.
2. Observe the `Deploy the agents` button.

### Expected Result

- Button is disabled, hidden, or shows appropriate behavior when no competitors exist.
- User is not allowed to deploy agents without competitors unless product design allows it.
- No application error occurs.

---

# DR-026 - Verify Deploy the agents button action

**Page:** Discovery & Run Page

**Priority:** High

**Type:** Functional UI

### Preconditions

Discovery & Run page is loaded with at least one competitor selected.

### Test Steps

1. Click the `Deploy the agents` button.
2. Observe the page behavior.

### Expected Result

- User is navigated to the next analysis, run, dashboard, or processing page as per application flow.
- No error message is displayed.
- Page transition happens successfully.

---

# DR-027 - Verify locked navigation items are displayed correctly

**Page:** Discovery & Run Page

**Priority:** Medium

**Type:** UI

### Preconditions

Discovery & Run page is loaded.

### Test Steps

1. Observe the top-right navigation items such as Compare, Workspace, and History.

### Expected Result

- Locked items display a lock icon or disabled state where applicable.
- History item is visible if available.
- Items are aligned properly in the header.

---

# DR-028 - Verify theme toggle icon is visible

**Page:** Discovery & Run Page

**Priority:** Low

**Type:** UI

### Preconditions

Discovery & Run page is loaded.

### Test Steps

1. Observe the right side of the header.

### Expected Result

- Theme toggle icon is visible.
- Icon is aligned with the header controls.
- Icon is not overlapped by other elements.

---

# DR-029 - Verify desktop responsive layout

**Page:** Discovery & Run Page

**Priority:** Medium

**Type:** UI

### Preconditions

Discovery & Run page is loaded on desktop viewport.

### Test Steps

1. Set viewport to desktop size.
2. Observe the page layout.

### Expected Result

- Competitor map appears on the left/main side.
- Confirmed competitor set panel appears on the right side.
- Content does not overlap.
- No unwanted horizontal scroll is displayed.

---

# DR-030 - Verify small viewport layout does not break

**Page:** Discovery & Run Page

**Priority:** Medium

**Type:** UI

### Preconditions

Discovery & Run page is loaded on a smaller viewport.

### Test Steps

1. Set viewport to a smaller supported size such as tablet width.
2. Observe the page layout.

### Expected Result

- Main content remains visible.
- Header controls remain accessible.
- Competitor panel and map do not overlap incorrectly.
- Page remains usable with vertical scrolling if required.
