import { expect, Locator, Page } from "@playwright/test";

export class CompetiterPage {
  readonly page: Page;

  readonly brandName: Locator;
  readonly briefStep: Locator;
  readonly discoveryStep: Locator;
  readonly dashboardStep: Locator;
  readonly recommendationsStep: Locator;

  readonly compareLink: Locator;
  readonly workspaceLink: Locator;
  readonly historyLink: Locator;

  readonly pageHeading: Locator;
  readonly pageSubtitle: Locator;

  readonly competitorMapSection: Locator;
  readonly confirmedPanelTitle: Locator;
  readonly competitorCountBadge: Locator;
  readonly deployAgentsButton: Locator;

  readonly competitorCards: Locator;
  readonly removeButtons: Locator;

  constructor(page: Page) {
    this.page = page;

    this.brandName = page.getByText("Argus", { exact: true });

    this.briefStep = page.getByText("Brief", { exact: true });
    this.discoveryStep = page.getByText("Discovery & Run", { exact: true });
    this.dashboardStep = page.getByText("Dashboard", { exact: true });
    this.recommendationsStep = page.getByText("Recommendations", { exact: true });

    this.compareLink = page.getByText("Compare", { exact: true });
    this.workspaceLink = page.getByText("Workspace", { exact: true });
    this.historyLink = page.getByText("History", { exact: true });

    this.pageHeading = page.getByRole("heading", {
      name: "Here’s who you’re up against",
    });

    this.pageSubtitle = page.getByText(
      "We mapped your competitive set from public signals.",
      { exact: false }
    );

    this.competitorMapSection = page.locator("body").filter({
      hasText: "Here’s who you’re up against",
    });

    this.confirmedPanelTitle = page.getByText("Confirmed competitor set", {
      exact: true,
    });

    this.competitorCountBadge = page.locator("text=/\\d+\\s+of\\s+\\d+/").first();

    this.deployAgentsButton = page.getByRole("button", {
      name: /deploy the agents/i,
    });

    this.competitorCards = page
      .locator("div")
      .filter({ hasText: /Direct|Indirect/i })
      .filter({ has: page.locator("button") });

    this.removeButtons = page.getByRole("button").filter({
      hasText: /^$/,
    });
  }

  async goto() {
    const baseUrl = process.env.BASE_URL || "http://localhost:5174";
    await this.page.goto(`${baseUrl}discovery`);
  }

  async verifyPageLoaded() {
    await expect(this.page).toHaveURL(/\/discovery/);
    await expect(this.pageHeading).toBeVisible();
    await expect(this.confirmedPanelTitle).toBeVisible();
    await expect(this.deployAgentsButton).toBeVisible();
  }

  async verifyBranding() {
    await expect(this.brandName).toBeVisible();
  }

  async verifyStepNavigation() {
    await expect(this.briefStep).toBeVisible();
    await expect(this.discoveryStep).toBeVisible();
    await expect(this.dashboardStep).toBeVisible();
    await expect(this.recommendationsStep).toBeVisible();
  }

  async verifyDiscoveryStepActive() {
    await expect(this.discoveryStep).toBeVisible();
  }

  async verifyTopNavigationItems() {
    await expect(this.compareLink).toBeVisible();
    await expect(this.workspaceLink).toBeVisible();
    await expect(this.historyLink).toBeVisible();
  }

  async verifyHeadingAndSubtitle() {
    await expect(this.pageHeading).toBeVisible();
    await expect(this.pageSubtitle).toBeVisible();
  }

  async verifyCompetitorMapVisible() {
    await expect(this.competitorMapSection).toBeVisible();

    const centerInitial = this.page.locator("text=/^[A-Z]$/").first();
    await expect(centerInitial).toBeVisible();
  }

  async verifyConfirmedCompetitorPanel() {
    await expect(this.confirmedPanelTitle).toBeVisible();
    await expect(this.competitorCountBadge).toBeVisible();
  }

  async verifyCompetitorCountFormat() {
    await expect(this.competitorCountBadge).toHaveText(/\d+\s+of\s+\d+/);
  }

  async verifyAtLeastOneCompetitorCardVisible() {
    const count = await this.getCompetitorCardCount();
    expect(count).toBeGreaterThan(0);
  }

  async verifyCompetitorCardsHaveNames() {
    const cards = await this.getCompetitorCards();
    const count = await cards.count();

    expect(count).toBeGreaterThan(0);

    for (let i = 0; i < count; i++) {
      await expect(cards.nth(i)).toBeVisible();
      await expect(cards.nth(i)).toContainText(/\S+/);
    }
  }

  async verifyCompetitorCardsHaveTypeBadge() {
    const cards = await this.getCompetitorCards();
    const count = await cards.count();

    expect(count).toBeGreaterThan(0);

    for (let i = 0; i < count; i++) {
      await expect(cards.nth(i)).toContainText(/Direct|Indirect/i);
    }
  }

  async verifyCompetitorCardsHaveDescription() {
    const cards = await this.getCompetitorCards();
    const count = await cards.count();

    expect(count).toBeGreaterThan(0);

    for (let i = 0; i < count; i++) {
      const text = await cards.nth(i).innerText();
      expect(text.trim().length).toBeGreaterThan(15);
    }
  }

  async verifyRemoveButtonsVisible() {
    const cards = await this.getCompetitorCards();
    const cardCount = await cards.count();

    expect(cardCount).toBeGreaterThan(0);

    for (let i = 0; i < cardCount; i++) {
      const removeButton = cards.nth(i).getByRole("button").first();
      await expect(removeButton).toBeVisible();
    }
  }

  async verifyDeployButtonVisible() {
    await expect(this.deployAgentsButton).toBeVisible();
  }

  async verifyDeployButtonEnabled() {
    await expect(this.deployAgentsButton).toBeEnabled();
  }

  async clickDeployAgents() {
    await this.deployAgentsButton.click();
  }

  async verifyDeployAgentsNavigation() {
    await this.clickDeployAgents();
    await expect(this.page).not.toHaveURL(/\/discovery$/);
  }

  async removeFirstCompetitor() {
    const cards = await this.getCompetitorCards();
    const initialCount = await cards.count();

    expect(initialCount).toBeGreaterThan(0);

    const firstCard = cards.first();
    const firstCardText = await firstCard.innerText();

    await firstCard.getByRole("button").first().click();

    return {
      initialCount,
      removedCardText: firstCardText,
    };
  }

  async verifyRemoveCompetitorUpdatesList() {
    const cardsBefore = await this.getCompetitorCards();
    const initialCount = await cardsBefore.count();

    expect(initialCount).toBeGreaterThan(0);

    await cardsBefore.first().getByRole("button").first().click();

    const cardsAfter = await this.getCompetitorCards();
    await expect.poll(async () => cardsAfter.count()).toBe(initialCount - 1);
  }

  async verifyRemoveCompetitorUpdatesBadge() {
    const badgeTextBefore = await this.competitorCountBadge.innerText();
    const currentCountBefore = Number(badgeTextBefore.match(/\d+/)?.[0]);

    expect(currentCountBefore).toBeGreaterThan(0);

    const cards = await this.getCompetitorCards();
    await cards.first().getByRole("button").first().click();

    await expect
      .poll(async () => {
        const badgeTextAfter = await this.competitorCountBadge.innerText();
        return Number(badgeTextAfter.match(/\d+/)?.[0]);
      })
      .toBe(currentCountBefore - 1);
  }

  async verifyRemovedCompetitorIsNotVisible() {
    const cards = await this.getCompetitorCards();
    const firstCard = cards.first();

    const removedText = await firstCard.innerText();
    const removedName = removedText.split("\n")[0].trim();

    await firstCard.getByRole("button").first().click();

    await expect(this.page.getByText(removedName, { exact: true })).not.toBeVisible();
  }

  async verifyResponsiveDesktopLayout() {
    await this.page.setViewportSize({ width: 1440, height: 900 });

    await expect(this.pageHeading).toBeVisible();
    await expect(this.confirmedPanelTitle).toBeVisible();
    await expect(this.deployAgentsButton).toBeVisible();

    const bodyWidth = await this.page.locator("body").evaluate((body) => {
      return body.scrollWidth <= window.innerWidth;
    });

    expect(bodyWidth).toBeTruthy();
  }

  async verifyNoHorizontalScroll() {
    const hasNoHorizontalScroll = await this.page.evaluate(() => {
      return document.documentElement.scrollWidth <= window.innerWidth;
    });

    expect(hasNoHorizontalScroll).toBeTruthy();
  }

  async verifyPageDoesNotShowBlankScreen() {
    const bodyText = await this.page.locator("body").innerText();
    expect(bodyText.trim().length).toBeGreaterThan(0);
  }

  async verifyNoVisibleErrorMessage() {
    await expect(this.page.getByText(/something went wrong/i)).not.toBeVisible();
    await expect(this.page.getByText(/error/i)).not.toBeVisible();
    await expect(this.page.getByText(/failed/i)).not.toBeVisible();
  }

  async getCompetitorCards(): Promise<Locator> {
    return this.page
      .locator("div")
      .filter({ hasText: /Direct|Indirect/i })
      .filter({ has: this.page.getByRole("button") });
  }

  async getCompetitorCardCount(): Promise<number> {
    const cards = await this.getCompetitorCards();
    return await cards.count();
  }
}