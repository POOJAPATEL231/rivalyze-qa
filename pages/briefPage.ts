import { expect, Locator, Page } from "@playwright/test";

export class BriefPage {
  readonly page: Page;

  readonly brandName: Locator;
  readonly briefStep: Locator;
  readonly discoveryStep: Locator;
  readonly liveRunStep: Locator;
  readonly dashboardStep: Locator;
  readonly recommendationsStep: Locator;

  readonly compareMenu: Locator;
  readonly workspaceMenu: Locator;
  readonly historyMenu: Locator;

  readonly eyebrowText: Locator;
  readonly heroHeading: Locator;
  readonly heroDescription: Locator;

  readonly existingCompanyTab: Locator;
  readonly startupIdeaTab: Locator;
  readonly companyNameLabel: Locator;
  readonly companyNameInput: Locator;
  readonly domainLabel: Locator;
  readonly domainInput: Locator;

  readonly notionChip: Locator;
  readonly figmaChip: Locator;
  readonly zomatoChip: Locator;

  readonly startScanButton: Locator;

  readonly statAgents: Locator;
  readonly statSources: Locator;
  readonly statTime: Locator;

  readonly howItWorksHeading: Locator;
  readonly briefCard: Locator;
  readonly discoveryCard: Locator;
  readonly liveRunCard: Locator;
  readonly reportCard: Locator;

  constructor(page: Page) {
    this.page = page;

    this.brandName = page.getByText("Argus", { exact: true });

    this.briefStep = page.getByText("Brief", { exact: true }).first();
    this.discoveryStep = page.getByText("Discovery", { exact: true }).first();
    this.liveRunStep = page.getByText("Live run", { exact: true }).first();
    this.dashboardStep = page.getByText("Dashboard", { exact: true }).first();
    this.recommendationsStep = page.getByText("Recommendations", { exact: true }).first();

    this.compareMenu = page.getByText("Compare", { exact: true });
    this.workspaceMenu = page.getByText("Workspace", { exact: true });
    this.historyMenu = page.getByText("History", { exact: true });

    this.eyebrowText = page.getByText("COMPETITIVE INTELLIGENCE, AUTOMATED");
    this.heroHeading = page.getByRole("heading", {
      name: /Shape your strategy before your rivals do/i,
    });
    this.heroDescription = page.getByText(
      /Give us a company or an idea.*Five specialist AI agents/i
    );

    this.existingCompanyTab = page.getByRole("button", {
      name: "EXISTING COMPANY",
    });
    this.startupIdeaTab = page.getByRole("button", {
      name: "STARTUP IDEA",
    });

    this.companyNameLabel = page.getByText("Company name", { exact: true });
    this.companyNameInput = page.getByPlaceholder("e.g. Notion");

    this.domainLabel = page.getByText("Domain", { exact: true });
    this.domainInput = page.getByPlaceholder("Add company domain");

    this.notionChip = page.getByRole("button", { name: "Notion" });
    this.figmaChip = page.getByRole("button", { name: "Figma" });
    this.zomatoChip = page.getByRole("button", { name: "Zomato" });

    this.startScanButton = page.getByRole("button", {
      name: /Start intelligence scan/i,
    });

    this.statAgents = page.getByText("5", { exact: true });
    this.statSources = page.getByText("40+", { exact: true });
    this.statTime = page.getByText("<10 min", { exact: true });

    this.howItWorksHeading = page.getByRole("heading", {
      name: "How it works",
    });

    this.briefCard = page.getByText("Tell us who you are or what you're building.");
    this.discoveryCard = page.getByText(
      "We map your real competitive set, direct and indirect."
    );
    this.liveRunCard = page.getByText(
      "Five agents research news, product, reviews, and strategy in parallel."
    );
    this.reportCard = page.getByText(
      "Get a boardroom-ready dashboard with sourced recommendations."
    );
  }

  async goto() {
    const baseURL = process.env.BASE_URL || "http://localhost:5174";
    await this.page.goto(`${baseURL}brief`);
    await this.page.waitForLoadState("domcontentloaded");
  }

  async verifyPageLoaded() {
    await expect(this.page).toHaveURL(/\/brief/);
    await expect(this.brandName).toBeVisible();
    await expect(this.heroHeading).toBeVisible();
    await expect(this.startScanButton).toBeVisible();
  }

  async verifyBranding() {
    await expect(this.brandName).toBeVisible();
  }

  async verifyStepNavigation() {
    await expect(this.briefStep).toBeVisible();
    await expect(this.discoveryStep).toBeVisible();
    await expect(this.liveRunStep).toBeVisible();
    await expect(this.dashboardStep).toBeVisible();
    await expect(this.recommendationsStep).toBeVisible();
  }

  async verifyBriefStepActive() {
    await expect(this.page.getByText("01", { exact: true }).first()).toBeVisible();
    await expect(this.briefStep).toBeVisible();
  }

  async verifyLockedSteps() {
    await expect(this.discoveryStep).toBeVisible();
    await expect(this.liveRunStep).toBeVisible();
    await expect(this.dashboardStep).toBeVisible();
    await expect(this.recommendationsStep).toBeVisible();
  }

  async verifyHeaderMenu() {
    await expect(this.compareMenu).toBeVisible();
    await expect(this.workspaceMenu).toBeVisible();
    await expect(this.historyMenu).toBeVisible();
  }

  async verifyHeroSection() {
    await expect(this.eyebrowText).toBeVisible();
    await expect(this.heroHeading).toBeVisible();
    await expect(this.heroDescription).toBeVisible();
  }

  async verifyInputCard() {
    await expect(this.existingCompanyTab).toBeVisible();
    await expect(this.startupIdeaTab).toBeVisible();
    await expect(this.companyNameInput).toBeVisible();
    await expect(this.domainInput).toBeVisible();
    await expect(this.startScanButton).toBeVisible();
  }

  async verifyExistingCompanySelected() {
    await expect(this.existingCompanyTab).toBeVisible();
    await expect(this.existingCompanyTab).toBeEnabled();
  }

  async verifyCompanyNameInput() {
    await expect(this.companyNameLabel).toBeVisible();
    await expect(this.companyNameInput).toBeVisible();
  }

  async verifyDomainInput() {
    await expect(this.domainLabel).toBeVisible();
    await expect(this.domainInput).toBeVisible();
  }

  async verifySuggestionChips() {
    await expect(this.notionChip).toBeVisible();
    await expect(this.figmaChip).toBeVisible();
    await expect(this.zomatoChip).toBeVisible();
  }

  async verifyStartScanButton() {
    await expect(this.startScanButton).toBeVisible();
    await expect(this.startScanButton).toBeEnabled();
  }

  async fillCompanyName(companyName: string) {
    await this.companyNameInput.fill(companyName);
    await expect(this.companyNameInput).toHaveValue(companyName);
  }

  async fillDomain(domain: string) {
    await this.domainInput.fill(domain);
    await expect(this.domainInput).toHaveValue(domain);
  }

  async clickNotionChip() {
    await this.notionChip.click();
    await expect(this.companyNameInput).not.toHaveValue("");
  }

  async verifyStatsSection() {
    await expect(this.statAgents).toBeVisible();
    await expect(this.statSources).toBeVisible();
    await expect(this.statTime).toBeVisible();
  }

  async verifyHowItWorksSection() {
    await expect(this.howItWorksHeading).toBeVisible();
  }

  async verifyHowItWorksCards() {
    await expect(this.briefCard).toBeVisible();
    await expect(this.discoveryCard).toBeVisible();
    await expect(this.liveRunCard).toBeVisible();
    await expect(this.reportCard).toBeVisible();
  }
}