import { test, expect } from "@playwright/test";
import dotenv from "dotenv";
import { BriefPage } from "../pages/briefPage";

dotenv.config();

test.use({
  storageState: "playwright/.auth/user.json",
});

test.describe("Argus Brief Page UI Test Cases", () => {
  test.beforeEach(async ({ page }) => {
    const briefPage = new BriefPage(page);
    await briefPage.goto();
  });

  test("[BP-001] Verify Brief Page loads successfully", async ({ page }) => {
    const briefPage = new BriefPage(page);
    await briefPage.verifyPageLoaded();
  });

  test("[BP-002] Verify Argus logo and brand name are visible", async ({ page }) => {
    const briefPage = new BriefPage(page);
    await briefPage.verifyBranding();
  });

  test("[BP-003] Verify step navigation is displayed", async ({ page }) => {
    const briefPage = new BriefPage(page);
    await briefPage.verifyStepNavigation();
  });

  test("[BP-004] Verify Brief step is active", async ({ page }) => {
    const briefPage = new BriefPage(page);
    await briefPage.verifyBriefStepActive();
  });

  test("[BP-005] Verify locked steps are displayed correctly", async ({ page }) => {
    const briefPage = new BriefPage(page);
    await briefPage.verifyLockedSteps();
  });

  test("[BP-006] Verify theme toggle icon is visible", async ({ page }) => {
    await expect(page.locator("svg").nth(0)).toBeVisible();
  });

  test("[BP-007] Verify logout icon is visible", async ({ page }) => {
    await expect(page.locator("svg").last()).toBeVisible();
  });

  test("[BP-008] Verify hero eyebrow text is visible", async ({ page }) => {
    const briefPage = new BriefPage(page);
    await expect(briefPage.eyebrowText).toBeVisible();
  });

  test("[BP-009] Verify main hero heading is visible", async ({ page }) => {
    const briefPage = new BriefPage(page);
    await expect(briefPage.heroHeading).toBeVisible();
  });

  test("[BP-010] Verify hero description is visible", async ({ page }) => {
    const briefPage = new BriefPage(page);
    await expect(briefPage.heroDescription).toBeVisible();
  });

  test("[BP-011] Verify Company name input is visible", async ({ page }) => {
    const briefPage = new BriefPage(page);
    await briefPage.verifyCompanyNameInput();
  });

  test("[BP-012] Verify Domain input is visible", async ({ page }) => {
    const briefPage = new BriefPage(page);
    await briefPage.verifyDomainInput();
  });

  test("[BP-013] Verify suggested company chips are visible", async ({ page }) => {
    const briefPage = new BriefPage(page);
    await briefPage.verifySuggestionChips();
  });

  test("[BP-014] Verify Start intelligence scan button is visible", async ({ page }) => {
    const briefPage = new BriefPage(page);
    await expect(briefPage.startScanButton).toBeVisible();
  });

  test("[BP-015] Verify user can enter company name", async ({ page }) => {
    const briefPage = new BriefPage(page);
    await briefPage.fillCompanyName("Figma");
  });

  test("[BP-016] Verify user can enter domain name", async ({ page }) => {
    const briefPage = new BriefPage(page);
    await briefPage.fillDomain("figma.com");
  });

  test("[BP-017] Verify clicking suggested company chip fills form data", async ({ page }) => {
    const briefPage = new BriefPage(page);
    await briefPage.clickNotionChip();
  });

  test("[BP-018] Verify stats section is visible", async ({ page }) => {
    const briefPage = new BriefPage(page);
    await briefPage.verifyStatsSection();
  });

  test("[BP-019] Verify How it works section is visible", async ({ page }) => {
    const briefPage = new BriefPage(page);
    await briefPage.verifyHowItWorksSection();
  });

  test("[BP-020] Verify How it works cards are displayed", async ({ page }) => {
    const briefPage = new BriefPage(page);
    await briefPage.verifyHowItWorksCards();
  });
});