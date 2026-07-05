import { test } from "@playwright/test";
import dotenv from "dotenv";
import { HeroPage } from "../pages/heroPage";

dotenv.config();

test.describe("Argus Hero Page UI Test Cases", () => {
  test.beforeEach(async ({ page }) => {
    const heroPage = new HeroPage(page);
    await heroPage.goto();
  });

  test("[HP-001] Verify Hero Page loads successfully", async ({ page }) => {
    const heroPage = new HeroPage(page);
    await heroPage.verifyPageLoaded();
  });

  test("[HP-002] Verify Argus logo is visible", async ({ page }) => {
    const heroPage = new HeroPage(page);
    await heroPage.verifyBranding();
  });

  test("[HP-003] Verify navigation menu items are displayed", async ({ page }) => {
    const heroPage = new HeroPage(page);
    await heroPage.verifyNavigationMenu();
  });

  test("[HP-004] Verify header Start Analysis button", async ({ page }) => {
    const heroPage = new HeroPage(page);
    await heroPage.verifyHeaderStartAnalysisButton();
  });

  test("[HP-005] Verify hero status badge", async ({ page }) => {
    const heroPage = new HeroPage(page);
    await heroPage.verifyAgentsLiveBadge();
  });

  test("[HP-006] Verify hero headline", async ({ page }) => {
    const heroPage = new HeroPage(page);
    await heroPage.verifyHeroHeadline();
  });

  test("[HP-007] Verify highlighted Competitors text", async ({ page }) => {
    const heroPage = new HeroPage(page);
    await heroPage.verifyHighlightedCompetitorsText();
  });

  test("[HP-008] Verify hero description", async ({ page }) => {
    const heroPage = new HeroPage(page);
    await heroPage.verifyHeroDescription();
  });

  test("[HP-009] Verify hero CTA buttons", async ({ page }) => {
    const heroPage = new HeroPage(page);
    await heroPage.verifyHeroCTAs();
  });

  test("[HP-010] Verify Start Analysis button is clickable", async ({ page }) => {
    const heroPage = new HeroPage(page);
    await heroPage.clickHeroStartAnalysis();
  });

  test("[HP-011] Verify Watch Demo button is clickable", async ({ page }) => {
    const heroPage = new HeroPage(page);
    await heroPage.clickWatchDemo();
  });

  test("[HP-012] Verify Every Claim Verified badge", async ({ page }) => {
    const heroPage = new HeroPage(page);
    await heroPage.verifyFeatureBadges();
  });

  test("[HP-013] Verify Threat Score card", async ({ page }) => {
    const heroPage = new HeroPage(page);
    await heroPage.verifyThreatScoreCard();
  });

  test("[HP-014] Verify Confidence card", async ({ page }) => {
    const heroPage = new HeroPage(page);
    await heroPage.verifyConfidenceCard();
  });

  test("[HP-015] Verify Evidence Verified card", async ({ page }) => {
    const heroPage = new HeroPage(page);
    await heroPage.verifyEvidenceVerifiedCard();
  });

  test("[HP-016] Verify Agent Active card", async ({ page }) => {
    const heroPage = new HeroPage(page);
    await heroPage.verifyAgentActiveCard();
  });

  test("[HP-017] Verify all stats cards", async ({ page }) => {
    const heroPage = new HeroPage(page);
    await heroPage.verifyStatsCards();
  });

  test("[HP-018] Verify background visual", async ({ page }) => {
    const heroPage = new HeroPage(page);
    await heroPage.verifyBackgroundVisual();
  });

  test("[HP-019] Verify desktop responsive layout", async ({ page }) => {
    const heroPage = new HeroPage(page);
    await heroPage.verifyDesktopResponsiveLayout();
  });

  test("[HP-020] Verify complete hero section rendering", async ({ page }) => {
    const heroPage = new HeroPage(page);
    await heroPage.verifyCompleteHeroSection();
  });

  test("[HP-021] Verify header Start Analysis button is clickable", async ({ page }) => {
    const heroPage = new HeroPage(page);
    await heroPage.clickHeaderStartAnalysis();
  });

  test("[HP-022] Verify feature badges below CTA", async ({ page }) => {
    const heroPage = new HeroPage(page);
    await heroPage.verifyFeatureBadges();
  });

  test("[HP-023] Verify hero title and description together", async ({ page }) => {
    const heroPage = new HeroPage(page);
    await heroPage.verifyHeroHeadline();
    await heroPage.verifyHeroDescription();
  });

  test("[HP-024] Verify header area", async ({ page }) => {
    const heroPage = new HeroPage(page);
    await heroPage.verifyBranding();
    await heroPage.verifyNavigationMenu();
    await heroPage.verifyHeaderStartAnalysisButton();
  });

  test("[HP-025] Verify hero smoke UI", async ({ page }) => {
    const heroPage = new HeroPage(page);
    await heroPage.verifyCompleteHeroSection();
  });
});