
# Login Page UI Test Cases

This file contains structured UI test cases for automation generation by GitHub Copilot, Codex, or AI agents.

## Format

Each test case contains: ID, Scenario, Preconditions, Steps, Expected Result, Priority, and Type.

---

## LP-001 - Verify login form is visible

**Page:** Login Page
**Priority:** High
**Type:** UI
**Preconditions:** User is on the Login page

### Test Steps

- 1. Open the Login page
- 2. Inspect the login form area

### Expected Result

Login form is visible with Welcome back title, email field, password field, Keep me logged in checkbox, Forgot password link, Sign in button, and Sign up link

---

## LP-002 - Verify email input field is displayed correctly

**Page:** Login Page
**Priority:** High
**Type:** UI
**Preconditions:** Login form is visible

### Test Steps

- 1. Inspect the Email field

### Expected Result

Email field is visible with label Email and placeholder you@example.com

---

## LP-003 - Verify email field accepts text

**Page:** Login Page
**Priority:** High
**Type:** UI
**Preconditions:** Login form is visible

### Test Steps

- 1. Click the Email field
- 2. Type a valid email address

### Expected Result

Entered email address is shown in the Email field

---

## LP-004 - Verify password input field is displayed correctly

**Page:** Login Page
**Priority:** High
**Type:** UI
**Preconditions:** Login form is visible

### Test Steps

- 1. Inspect the Password field

### Expected Result

Password field is visible with label Password and the entered value is masked

---

## LP-005 - Verify password field accepts text

**Page:** Login Page
**Priority:** High
**Type:** UI
**Preconditions:** Login form is visible

### Test Steps

- 1. Click the Password field
- 2. Type a password

### Expected Result

Password is accepted and displayed in masked format

---

## LP-006 - Verify Keep me logged in checkbox default state

**Page:** Login Page
**Priority:** Medium
**Type:** UI
**Preconditions:** Login form is visible

### Test Steps

- 1. Inspect the Keep me logged in checkbox

### Expected Result

Keep me logged in checkbox is visible and selected by default

---

## LP-007 - Verify Keep me logged in checkbox can be toggled

**Page:** Login Page
**Priority:** Medium
**Type:** UI
**Preconditions:** Login form is visible

### Test Steps

- 1. Click the Keep me logged in checkbox
- 2. Click it again

### Expected Result

Checkbox state changes from selected to unselected and can be selected again

---

## LP-008 - Verify Forgot password link is visible

**Page:** Login Page
**Priority:** Medium
**Type:** UI
**Preconditions:** Login form is visible

### Test Steps

- 1. Inspect the Forgot password link

### Expected Result

Forgot password link is visible near the password section

---

## LP-009 - Verify Sign in button is visible and enabled

**Page:** Login Page
**Priority:** High
**Type:** UI
**Preconditions:** Login form is visible

### Test Steps

- 1. Inspect the Sign in button

### Expected Result

Sign in button is visible, enabled, and clickable

---

## LP-010 - Verify Sign up link is visible

**Page:** Login Page
**Priority:** Medium
**Type:** UI
**Preconditions:** Login form is visible

### Test Steps

- 1. Inspect the text below Sign in button

### Expected Result

Text Don't have an account? is visible with Sign up link

---

## LP-011 - Verify required validation for empty login form

**Page:** Login Page
**Priority:** High
**Type:** UI
**Preconditions:** Login form is visible

### Test Steps

- 1. Keep Email field empty
- 2. Keep Password field empty
- 3. Click Sign in

### Expected Result

User should not be able to submit the form without required login details

---

## LP-012 - Verify login form layout remains stable

**Page:** Login Page
**Priority:** Medium
**Type:** UI
**Preconditions:** Login form is visible

### Test Steps

- 1. Inspect all login form elements
- 2. Click Email field
- 3. Click Password field
- 4. Toggle Keep me logged in checkbox

### Expected Result

Login form layout remains stable and no form element overlaps, disappears, or breaks
