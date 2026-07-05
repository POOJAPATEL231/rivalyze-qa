import { test } from "@playwright/test";
import dotenv from "dotenv";
import { LoginPage } from "../pages/loginPage";

dotenv.config();

test.describe("Argus Login Page UI Test Cases", () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test("[LP-001] Verify login form is visible", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.verifyLoginFormVisible();
  });

  test("[LP-002] Verify email input field is displayed correctly", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.verifyEmailFieldUI();
  });

  test("[LP-003] Verify email field accepts text", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.verifyEmailFieldAcceptsText();
  });

  test("[LP-004] Verify password input field is displayed correctly", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.verifyPasswordFieldUI();
  });

  test("[LP-005] Verify password field accepts text", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.verifyPasswordFieldAcceptsText();
  });

  test("[LP-006] Verify Keep me logged in checkbox default state", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.verifyKeepMeLoggedInDefaultState();
  });

  test("[LP-007] Verify Keep me logged in checkbox can be toggled", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.verifyKeepMeLoggedInToggle();
  });

  test("[LP-008] Verify Forgot password link is visible", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.verifyForgotPasswordLinkVisible();
  });

  test("[LP-009] Verify Sign in button is visible and enabled", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.verifySignInButtonVisibleAndEnabled();
  });

  test("[LP-010] Verify Sign up link is visible", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.verifySignUpLinkVisible();
  });

  test("[LP-011] Verify required validation for empty login form", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.verifyRequiredValidationForEmptyForm();
  });

  test("[LP-012] Verify login form layout remains stable", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.verifyFormLayoutStable();
  });
});