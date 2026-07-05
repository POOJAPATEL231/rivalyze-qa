# Login Page Functional Test Cases

This file contains important functional test cases for the Login page.

## Format

Each test case contains: ID, Scenario, Preconditions, Steps, Expected Result, Priority, and Type.

---

## LF-001 - Verify login with valid credentials

**Page:** Login Page
**Priority:** Critical
**Type:** Functional
**Preconditions:** User has valid registered email and password

### Test Steps

- 1. Open the Login page
- 2. Enter valid email
- 3. Enter valid password
- 4. Click Sign in

### Expected Result

User should be logged in successfully and redirected to the authenticated page

## LF-004 - Verify required validation for empty email and password

**Page:** Login Page
**Priority:** Critical
**Type:** Validation
**Preconditions:** Login page is visible

### Test Steps

- 1. Keep Email field empty
- 2. Keep Password field empty
- 3. Click Sign in

### Expected Result

User should not be able to submit the login form and required field validation should be displayed

---

## LF-005 - Verify validation for invalid email format

**Page:** Login Page
**Priority:** High
**Type:** Validation
**Preconditions:** Login page is visible

### Test Steps

- 1. Enter invalid email format such as test@
- 2. Enter any password
- 3. Click Sign in

### Expected Result

User should not be able to submit the form and email format validation should be displayed

---

## LF-006 - Verify password cannot be submitted as empty

**Page:** Login Page
**Priority:** Critical
**Type:** Validation
**Preconditions:** Login page is visible

### Test Steps

- 1. Enter valid email
- 2. Keep Password field empty
- 3. Click Sign in

### Expected Result

User should not be able to submit the form and password required validation should be displayed

---

## LF-007 - Verify email cannot be submitted as empty

**Page:** Login Page
**Priority:** Critical
**Type:** Validation
**Preconditions:** Login page is visible

### Test Steps

- 1. Keep Email field empty
- 2. Enter password
- 3. Click Sign in

### Expected Result

User should not be able to submit the form and email required validation should be displayed

---

## LF-008 - Verify Sign up navigation

**Page:** Login Page
**Priority:** High
**Type:** Functional
**Preconditions:** Login page is visible

### Test Steps

- 1. Click Sign up link

### Expected Result

User should be redirected to the Sign up page

---

## LF-009 - Verify Keep me logged in functionality

**Page:** Login Page
**Priority:** High
**Type:** Functional
**Preconditions:** User has valid login credentials

### Test Steps

- 1. Enter valid email
- 2. Enter valid password
- 3. Keep Keep me logged in checkbox selected
- 4. Click Sign in
- 5. Close and reopen the browser or reload the app

### Expected Result

User session should remain active based on the Remember me behavior

---

## LF-010 - Verify user is not logged in with SQL injection input

**Page:** Login Page
**Priority:** Critical
**Type:** Security Functional
**Preconditions:** Login page is visible

### Test Steps

- 1. Enter `' OR '1'='1` in Email field
- 2. Enter `' OR '1'='1` in Password field
- 3. Click Sign in

### Expected Result

User should not be logged in and application should show a safe validation or error message

---

## LF-011 - Verify user is not logged in with XSS input

**Page:** Login Page
**Priority:** Critical
**Type:** Security Functional
**Preconditions:** Login page is visible

### Test Steps

- 1. Enter `<script>alert("xss")</script>` in Email field
- 2. Enter `<script>alert("xss")</script>` in Password field
- 3. Click Sign in

### Expected Result

Script should not execute, user should not be logged in, and application should handle the input safely

---

## LF-013 - Verify error message does not reveal whether email exists

**Page:** Login Page
**Priority:** Critical
**Type:** Security Functional
**Preconditions:** Login page is visible

### Test Steps

- 1. Enter unregistered email with any password
- 2. Click Sign in
- 3. Enter registered email with wrong password
- 4. Click Sign in

### Expected Result

Application should show a generic login error and should not reveal whether the email is registered

---

## LF-015 - Verify authenticated user cannot access login page again

**Page:** Login Page
**Priority:** High
**Type:** Functional
**Preconditions:** User is already logged in

### Test Steps

- 1. Login with valid credentials
- 2. Open `/login` again in the same session

### Expected Result

User should not see the login form again and should be redirected to the authenticated page
