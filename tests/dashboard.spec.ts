import { test } from "@playwright/test";
import dotenv from "dotenv";
import { DashboardPage } from "../pages/dashboardPage";

dotenv.config();

test.use({
  storageState: "playwright/.auth/user.json",
});

test.describe("Argus Dashboard Page UI Test Cases", () => {
  test.beforeEach(async ({ page }) => {
    const dashboardPage = new DashboardPage(page);
    await dashboardPage.goto();
  });

  test("[DP-001] Verify Dashboard Page loads successfully", async ({ page }) => {
    const dashboardPage = new DashboardPage(page);
    await dashboardPage.verifyPageLoaded();
    await dashboardPage.verifyPageDoesNotShowBlankScreen();
  });

//   test("[DP-002] Verify top step navigation is displayed", async ({ page }) => {
//     const dashboardPage = new DashboardPage(page);
//     await dashboardPage.verifyBranding();
//     await dashboardPage.verifyStepNavigation();
//     await dashboardPage.verifyDashboardStepVisible();
//   });

  test("[DP-003] Verify processing or analysis status is handled", async ({ page }) => {
    const dashboardPage = new DashboardPage(page);
    await dashboardPage.verifyProcessingOrAnalysisStatusHandled();
  });

});