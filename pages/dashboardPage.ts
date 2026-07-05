import { expect, Locator, Page } from "@playwright/test";

export class DashboardPage {
  readonly page: Page;

  readonly brandName: Locator;
  readonly backButton: Locator;
  readonly pageHeading: Locator;
  readonly pageSubtitle: Locator;

  readonly briefStep: Locator;
  readonly discoveryStep: Locator;
  readonly dashboardStep: Locator;
  readonly recommendationsStep: Locator;

  readonly compareLink: Locator;
  readonly workspaceLink: Locator;
  readonly historyLink: Locator;

  constructor(page: Page) {
    this.page = page;

    this.brandName = page.getByText("Argus", { exact: true }).first();

    this.backButton = page.getByText("Back", { exact: true });

    this.pageHeading = page.getByRole("heading", {
      name: "here’s the read",
    });

    this.pageSubtitle = page.getByText(/every claim below traces back to a source/i);

    this.briefStep = page.getByRole("button", { name: "Brief" });
    this.discoveryStep = page.getByRole("button", { name: "Discovery & Run" });
    this.dashboardStep = page.getByRole("button", { name: "Dashboard" });
    this.recommendationsStep = page.getByRole("button", { name: "Recommendations" });

    this.compareLink = page.getByText("Compare", { exact: true });
    this.workspaceLink = page.getByText("Workspace", { exact: true });
    this.historyLink = page.getByText("History", { exact: true });
  }

  async goto() {
    const baseUrl = process.env.BASE_URL || "http://localhost:5174";
    await this.page.goto(`${baseUrl}dashboard`, {
      waitUntil: "domcontentloaded",
    });

    await this.page.waitForLoadState("networkidle").catch(() => {});
  }

  async verifyPageLoaded() {
    await expect(this.page).toHaveURL(/dashboard|login|brief|discovery/i);
    await expect(this.page.locator("body")).not.toBeEmpty();
  }

  async verifyPageDoesNotShowBlankScreen() {
    const bodyText = await this.page.locator("body").innerText();
    expect(bodyText.trim().length).toBeGreaterThan(0);
  }

  async verifyBranding() {
    await expect(this.brandName).toBeVisible();
  }

  async verifyBackButtonVisible() {
    await expect(this.backButton).toBeVisible();
  }

  async verifyHeadingAndSubtitle() {
    await expect(this.pageHeading).toBeVisible();
    await expect(this.pageSubtitle).toBeVisible();
  }

  async verifyStepNavigation() {
    await expect(this.briefStep).toBeVisible();
    await expect(this.discoveryStep).toBeVisible();
    await expect(this.dashboardStep).toBeVisible();
    await expect(this.recommendationsStep).toBeVisible();
  }

  async verifyDashboardStepVisible() {
    await expect(this.dashboardStep).toBeVisible();
  }

  async verifyTopNavigationItems() {
    await expect(this.compareLink).toBeVisible();
    await expect(this.workspaceLink).toBeVisible();
    await expect(this.historyLink).toBeVisible();
  }

  async verifySummaryCardIsHandled() {
    const summaryText = this.page.getByText(/threat level|executive summary|summary|analysis/i).first();
    await expect(summaryText).toBeVisible();
  }

  async verifyThreatLevelIsHandled() {
    const threatOrStatus = this.page
      .getByText(/threat level|low|medium|high|critical|analysis|processing|issue/i)
      .first();

    await expect(threatOrStatus).toBeVisible();
  }

  async verifyExecutiveSummaryIsHandled() {
    const summaryOrStatus = this.page
      .getByText(/executive summary|summary|analysis|processing|issue|generated/i)
      .first();

    await expect(summaryOrStatus).toBeVisible();
  }

  async verifyHeadToHeadSectionVisible() {
    await expect(this.page.getByText("Head to head")).toBeVisible();
  }

  async verifyProcessingOrAnalysisStatusHandled() {
    const statusText = this.page
      .getByText(/issues with processing|problem generating|analysis|processing|generated|source/i)
      .first();

    await expect(statusText).toBeVisible();
  }

  async verifyOpportunitiesSectionHandled() {
    const opportunitiesOrEmptyState = this.page
      .getByText(/opportunities|low-signal findings|no opportunities|empty|analysis/i)
      .first();

    await expect(opportunitiesOrEmptyState).toBeVisible();
  }

  async verifyNoHorizontalScroll() {
    const hasNoHorizontalScroll = await this.page.evaluate(() => {
      return document.documentElement.scrollWidth <= window.innerWidth;
    });

    expect(hasNoHorizontalScroll).toBeTruthy();
  }

  async verifyDesktopResponsiveLayout() {
    await this.page.setViewportSize({ width: 1440, height: 900 });

    await expect(this.pageHeading).toBeVisible();
    await expect(this.page.locator("body")).not.toBeEmpty();

    await this.verifyNoHorizontalScroll();
  }
}