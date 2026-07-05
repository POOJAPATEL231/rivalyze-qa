import { test } from "@playwright/test";
import dotenv from "dotenv";
import { LoginPage } from "../pages/loginPage";

dotenv.config();

test.describe("Argus Login Page Functional Test Cases", () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  // test("[LF-002] Verify login with invalid email and valid password", async ({ page }) => {
  //   const loginPage = new LoginPage(page);
  //   await loginPage.verifyLoginWithInvalidEmail();
  // });

  // test("[LF-003] Verify login with valid email and invalid password", async ({ page }) => {
  //   const loginPage = new LoginPage(page);
  //   await loginPage.verifyLoginWithInvalidPassword();
  // });

  test("[LF-004] Verify required validation for empty email and password", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.verifyRequiredValidationForEmptyForm();
  });

  test("[LF-005] Verify validation for invalid email format", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.verifyInvalidEmailFormatValidation();
  });

  test("[LF-006] Verify password cannot be submitted as empty", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.verifyPasswordCannotBeEmpty();
  });

  test("[LF-007] Verify email cannot be submitted as empty", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.verifyEmailCannotBeEmpty();
  });

  test("[LF-008] Verify Sign up navigation", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.verifySignUpNavigation();
  });

  test("[LF-009] Verify user is not logged in with SQL injection input", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.verifySqlInjectionInputNotAccepted();
  });

  test("[LF-010] Verify user is not logged in with XSS input", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.verifyXssInputNotExecuted();
  });

  test("[LF-011] Verify login button prevents multiple rapid submissions", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.verifyLoginButtonPreventsMultipleRapidSubmissions();
  });

  // test("[LF-012] Verify generic error message for invalid login", async ({ page }) => {
  //   const loginPage = new LoginPage(page);
  //   await loginPage.verifyGenericErrorForInvalidLogin();
  // });

  // manually verified the test cases for the signup functionality
});