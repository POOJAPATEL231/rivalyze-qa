import { test } from "@playwright/test";
import dotenv from "dotenv";
import { CompetiterPage } from "../pages/competiterPage";

dotenv.config();

test.use({
  storageState: "playwright/.auth/user.json",
});

test.describe("Argus Competiter Page UI Test Cases", () => {
  test.beforeEach(async ({ page }) => {
    const competiterPage = new CompetiterPage(page);
    await competiterPage.goto();
  });

  test("[CP-001] Verify Argus branding is visible", async ({ page }) => {
    const competiterPage = new CompetiterPage(page);
    await competiterPage.verifyBranding();
  });

//   test("[CP-002] Verify Discovery & Run step is active", async ({ page }) => {
//     const competiterPage = new CompetiterPage(page);
//     await competiterPage.verifyDiscoveryStepActive();
//   });

  test("[CP-003] Verify page has no horizontal scroll", async ({ page }) => {
    const competiterPage = new CompetiterPage(page);
    await competiterPage.verifyNoHorizontalScroll();
  });

  test("[CP-004] Verify no visible error message is shown", async ({ page }) => {
    const competiterPage = new CompetiterPage(page);
    await competiterPage.verifyNoVisibleErrorMessage();
  });

});