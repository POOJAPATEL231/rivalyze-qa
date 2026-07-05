import { test, expect } from "@playwright/test";
import dotenv from "dotenv";
import { HeroPage } from "../pages/heroPage";

dotenv.config();

test.describe("Argus Functional Test Cases", () => {
  test.beforeEach(async ({ page }) => {
    const heroPage = new HeroPage(page);
    await heroPage.goto();
  });

  test("[AF-001] Verify How It Works navigation opens correct section", async ({ page }) => {
    const heroPage = new HeroPage(page);

    await heroPage.clickHowItWorks();
    await heroPage.verifyHowItWorksSection();
  });

  test("[AF-002] Verify Product navigation opens correct section", async ({ page }) => {
    const heroPage = new HeroPage(page);

    await heroPage.clickProduct();
    await heroPage.verifyProductSection();
  });

  test("[AF-003] Verify clicking Start Analysis button performs expected action from hero section", async ({ page }) => {
    const heroPage = new HeroPage(page);

    await heroPage.clickHeroStartAnalysis();
    await heroPage.verifyNoBlankScreen();
  });

  test("[AF-004] Verify Watch Demo button opens showcase/product section", async ({ page }) => {
    const heroPage = new HeroPage(page);

    await heroPage.clickWatchDemo();
    await heroPage.verifyProductSection();
  });

  test("[AF-005] Verify theme toggle changes dark theme to light theme", async ({ page }) => {
    const heroPage = new HeroPage(page);

    const oldBackground = await heroPage.getBodyBackgroundColor();

    await heroPage.clickThemeToggle();
    await heroPage.verifyThemeChanged(oldBackground);
    await heroPage.verifyNoBlankScreen();
  });

  test("[AF-006] Verify theme toggle changes light theme back to dark theme", async ({ page }) => {
    const heroPage = new HeroPage(page);

    await heroPage.clickThemeToggle();
    const lightBackground = await heroPage.getBodyBackgroundColor();

    await heroPage.clickThemeToggle();
    await heroPage.verifyThemeChanged(lightBackground);
    await heroPage.verifyNoBlankScreen();
  });

  test("[AF-07] Verify How It Works section content is displayed correctly", async ({ page }) => {
    const heroPage = new HeroPage(page);

    await heroPage.clickHowItWorks();
    await heroPage.verifyHowItWorksSection();
    await heroPage.verifyHowItWorksContent();
  });

  test("[AF-08] Verify Product section content is displayed correctly", async ({ page }) => {
    const heroPage = new HeroPage(page);

    await heroPage.clickProduct();
    await heroPage.verifyProductSection();
    await heroPage.verifyProductContent();
  });


  test("[AF-09] Verify final CTA Start Analysis button is clickable", async ({ page }) => {
    const heroPage = new HeroPage(page);

    await heroPage.clickRoadmap();
    await heroPage.clickFinalStartAnalysis();
    await heroPage.verifyNoBlankScreen();
  });

});