import { expect, Locator, Page } from "@playwright/test";

export class HeroPage {
  readonly page: Page;

  readonly brandName: Locator;

  readonly howItWorksLink: Locator;
  readonly evidenceLink: Locator;
  readonly productLink: Locator;
  readonly roadmapLink: Locator;

  readonly loginButton: Locator;
  readonly signUpButton: Locator;
  readonly themeToggleButton: Locator;

  readonly headerStartAnalysisButton: Locator;
  readonly heroStartAnalysisButton: Locator;
  readonly finalStartAnalysisButton: Locator;
  readonly watchDemoButton: Locator;
  readonly scheduleDemoButton: Locator;

  readonly heroHeadline: Locator;
  readonly heroDescription: Locator;

  readonly howItWorksHeading: Locator;
  readonly evidenceHeading: Locator;
  readonly productHeading: Locator;
  readonly roadmapHeading: Locator;

  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly signInButton: Locator;
  readonly loginPageSignUpLink: Locator;
  readonly forgotPasswordLink: Locator;

  readonly agentsLiveBadge: Locator;
  readonly competitorsText: Locator;

  readonly threatScoreText: Locator;
  readonly threatScoreValue: Locator;

  readonly confidenceText: Locator;
  readonly confidenceValue: Locator;

  readonly evidenceVerifiedText: Locator;
  readonly evidenceVerifiedValue: Locator;

  readonly agentActiveText: Locator;
  readonly researchAgentText: Locator;

  readonly everyClaimVerified: Locator;
  readonly clickToEvidence: Locator;
  readonly honestConfidenceScores: Locator;
  readonly twoMinuteAnalysis: Locator;

  constructor(page: Page) {
    this.page = page;

    this.brandName = page.getByText("Argus", { exact: true }).first();

    this.howItWorksLink = page.getByText("How It Works", { exact: true }).first();
    this.evidenceLink = page.getByText("Evidence", { exact: true }).first();
    this.productLink = page.getByText("Product", { exact: true }).first();
    this.roadmapLink = page.getByText("Roadmap", { exact: true }).first();

    this.loginButton = page.getByRole("button", { name: /^Login$/i }).first();
    this.signUpButton = page.getByRole("button", { name: /^Sign Up$/i }).first();

    this.themeToggleButton = page.locator("button").filter({
      has: page.locator("svg"),
    }).first();

    this.headerStartAnalysisButton = page.getByRole("button", {
      name: /^Start Analysis$/i,
    }).first();

    this.heroStartAnalysisButton = page.getByRole("button", {
      name: /^Start Analysis$/i,
    }).nth(1);

    this.finalStartAnalysisButton = page.getByRole("button", {
      name: /^Start Analysis$/i,
    }).last();

    this.watchDemoButton = page.getByText("Watch Demo", { exact: true }).first();

    this.scheduleDemoButton = page.getByRole("button", {
      name: /^Schedule Demo$/i,
    }).first();

    this.heroHeadline = page.getByText(/Stop Guessing/i).first();

    this.heroDescription = page
      .getByText(/Argus deploys 5 AI agents/i)
      .first();

    this.howItWorksHeading = page.getByText(
      "From Question To Strategy In Minutes",
      { exact: true }
    );

    this.evidenceHeading = page.getByText("Don’t Trust The AI. Audit It.", {
      exact: true,
    });

    this.productHeading = page.getByText("A Boardroom-Ready Brief", {
      exact: true,
    });

    this.roadmapHeading = page.getByText("Where We’re Headed", {
      exact: true,
    });

    this.emailInput = page.getByLabel("Email").or(
      page.getByPlaceholder("you@example.com")
    );

    this.passwordInput = page.getByLabel("Password").or(
      page.getByPlaceholder("password")
    );

    this.signInButton = page.getByRole("button", { name: "Sign in" });

    this.loginPageSignUpLink = page.getByText("Sign up").last();

    this.forgotPasswordLink = page.getByText("Forgot password");

    this.agentsLiveBadge = page.getByText(/5\s*agents\s*live/i).first();

    this.competitorsText = page.getByText(
    "Competitors",
    { exact: true }
    ).first();

    this.threatScoreText = page.getByText(/Threat Score/i).first();
    this.threatScoreValue = page.getByText("72", { exact: true }).first();

    this.confidenceText = page.getByText(/^Confidence$/i).first();
    this.confidenceValue = page.getByText("72%", { exact: true }).first();

    this.evidenceVerifiedText =
    page.getByText(/Evidence Verified/i).first();

    this.evidenceVerifiedValue =
    page.getByText("18/18", { exact: true }).first();

    this.agentActiveText =
    page.getByText(/Agent Active/i).first();

    this.researchAgentText =
    page.getByText(/Research Agent/i).first();

    this.everyClaimVerified =
    page.getByText(/Every Claim Verified/i).first();

    this.clickToEvidence =
    page.getByText(/Click-To-Evidence/i).first();

    this.honestConfidenceScores =
    page.getByText(/Honest Confidence Scores/i).first();

    this.twoMinuteAnalysis =
    page.getByText(/2-Minute Analysis/i).first();
  }

  async goto(): Promise<void> {
    const baseUrl = process.env.BASE_URL;

    if (!baseUrl) {
      throw new Error("BASE_URL is missing in .env file");
    }

    await this.page.goto(baseUrl);
    await this.page.waitForLoadState("domcontentloaded");
  }

  async verifyLandingPageLoaded(): Promise<void> {
    await expect(this.brandName).toBeVisible();
    await expect(this.heroHeadline).toBeVisible();
  }

  async clickHowItWorks(): Promise<void> {
    await this.howItWorksLink.click();
  }

  async clickEvidence(): Promise<void> {
    await this.evidenceLink.click();
  }

  async clickProduct(): Promise<void> {
    await this.productLink.click();
  }

  async clickRoadmap(): Promise<void> {
    await this.roadmapLink.click();
  }

  async verifyHowItWorksSection(): Promise<void> {
    await expect(this.page).toHaveURL(/#how-it-works/);
    await expect(this.howItWorksHeading).toBeVisible();
  }

  async verifyEvidenceSection(): Promise<void> {
    await expect(this.page).toHaveURL(/#evidence/);
    await expect(this.evidenceHeading).toBeVisible();
  }

  async verifyProductSection(): Promise<void> {
    await expect(this.page).toHaveURL(/#showcase/);
    await expect(this.productHeading).toBeVisible();
  }

  async verifyRoadmapSection(): Promise<void> {
    await expect(this.page).toHaveURL(/#roadmap/);
    await expect(this.roadmapHeading).toBeVisible();
  }

  async clickWatchDemo(): Promise<void> {
    await expect(this.watchDemoButton).toBeVisible();
    await this.watchDemoButton.click();
  }

  async clickThemeToggle(): Promise<void> {
    await expect(this.themeToggleButton).toBeVisible();
    await this.themeToggleButton.click();
  }

  async verifyThemeChanged(previousBackground: string): Promise<void> {
    await expect
      .poll(async () => {
        return await this.page.evaluate(() => {
          return window.getComputedStyle(document.body).backgroundColor;
        });
      })
      .not.toBe(previousBackground);
  }

  async getBodyBackgroundColor(): Promise<string> {
    return await this.page.evaluate(() => {
      return window.getComputedStyle(document.body).backgroundColor;
    });
  }

  async clickLogin(): Promise<void> {
    await this.loginButton.click();
  }

  async clickSignUp(): Promise<void> {
    await this.signUpButton.click();
  }

  async verifyLoginPage(): Promise<void> {
    await expect(this.page).toHaveURL(/\/login/);
    await expect(this.page.getByText(/Welcome back/i)).toBeVisible();
    await expect(this.emailInput).toBeVisible();
    await expect(this.passwordInput).toBeVisible();
    await expect(this.signInButton).toBeVisible();
  }

  async verifySignupPage(): Promise<void> {
    await expect(this.page).toHaveURL(/\/signup|\/sign-up|\/register/);
    await expect(this.page.locator("form").or(this.emailInput)).toBeVisible();
  }

  async verifyHeaderVisible(): Promise<void> {
    await expect(this.brandName).toBeVisible();
    await expect(this.loginButton).toBeVisible();
    await expect(this.signUpButton).toBeVisible();
  }

  async verifyHowItWorksContent(): Promise<void> {
    await expect(this.page.getByText("Enter a company or startup idea.")).toBeVisible();
    await expect(this.page.getByText("Watch 5 AI agents work simultaneously.")).toBeVisible();
    await expect(this.page.getByText("Receive a strategic brief.")).toBeVisible();

    await expect(this.page.getByText("Discovery Agent").first()).toBeVisible();
    await expect(this.page.getByText("Research Agent").first()).toBeVisible();
    await expect(this.page.getByText("Sentiment Agent").first()).toBeVisible();
    await expect(this.page.getByText("Validation Agent").first()).toBeVisible();
    await expect(this.page.getByText("Strategy Agent").first()).toBeVisible();
  }

  async verifyEvidenceContent(): Promise<void> {
    await expect(this.page.getByText("Research Agent").first()).toBeVisible();
    await expect(this.page.getByText("Sentiment Agent").first()).toBeVisible();
    await expect(this.page.getByText("Discovery Agent").first()).toBeVisible();
    await expect(this.page.getByText("Evidence Drawer")).toBeVisible();
    await expect(this.page.getByText("Notion Pricing Page")).toBeVisible();
    await expect(this.page.getByText("Coda Blog")).toBeVisible();
  }

  async verifyProductContent(): Promise<void> {
    await expect(this.productHeading).toBeVisible();
    await expect(this.page.getByText("Executive Summary")).toBeVisible();
    await expect(this.page.getByText("SWOT Analysis")).toBeVisible();
    await expect(this.page.getByText("Head-to-Head")).toBeVisible();
    await expect(this.page.getByText("81%")).toBeVisible();
  }

  async verifyRoadmapContent(): Promise<void> {
    await expect(this.page.getByText("AI Competitive Intelligence")).toBeVisible();
    await expect(this.page.getByText("Continuous Monitoring")).toBeVisible();
    await expect(this.page.getByText("Team Workspaces")).toBeVisible();
    await expect(this.page.getByText("Slack & CRM Integrations")).toBeVisible();
    await expect(this.page.getByText("Advanced Intelligence Signals")).toBeVisible();
  }

  async clickHeroStartAnalysis(): Promise<void> {
    await expect(this.heroStartAnalysisButton).toBeVisible();
    await this.heroStartAnalysisButton.click();
  }

  async clickFinalStartAnalysis(): Promise<void> {
    await this.finalStartAnalysisButton.scrollIntoViewIfNeeded();
    await expect(this.finalStartAnalysisButton).toBeVisible();
    await this.finalStartAnalysisButton.click();
  }

  async clickScheduleDemo(): Promise<void> {
    await this.scheduleDemoButton.scrollIntoViewIfNeeded();
    await expect(this.scheduleDemoButton).toBeVisible();
    await this.scheduleDemoButton.click();
  }

  async verifyNoBlankScreen(): Promise<void> {
    await expect(this.page.locator("body")).toBeVisible();
    await expect(this.page.locator("body")).not.toBeEmpty();
  }

  async clickLoginPageSignUpLink(): Promise<void> {
    await expect(this.loginPageSignUpLink).toBeVisible();
    await this.loginPageSignUpLink.click();
  }

  async clickForgotPassword(): Promise<void> {
    await expect(this.forgotPasswordLink).toBeVisible();
    await this.forgotPasswordLink.click();
  }

  async performInvalidLogin(): Promise<void> {
    await this.emailInput.fill("invalid@test.com");
    await this.passwordInput.fill("wrongpassword123");
    await this.signInButton.click();
  }

  async verifyDashboardNotOpened(): Promise<void> {
    await expect(this.page).not.toHaveURL(/dashboard|dash|home/);
  }

  async verifyPageLoaded(): Promise<void> {
  await expect(this.brandName).toBeVisible();
  await expect(this.heroHeadline).toBeVisible();
}

    async verifyBranding(): Promise<void> {
    await expect(this.brandName).toBeVisible();
    }

    async verifyNavigationMenu(): Promise<void> {
    await expect(this.howItWorksLink).toBeVisible();
    await expect(this.evidenceLink).toBeVisible();
    await expect(this.productLink).toBeVisible();
    await expect(this.roadmapLink).toBeVisible();
    }

    async verifyHeaderStartAnalysisButton(): Promise<void> {
    await expect(this.headerStartAnalysisButton).toBeVisible();
    await expect(this.headerStartAnalysisButton).toBeEnabled();
    }

    async verifyAgentsLiveBadge(): Promise<void> {
    await expect(this.agentsLiveBadge).toBeVisible();
    }

    async verifyHeroHeadline(): Promise<void> {
    await expect(this.heroHeadline).toBeVisible();
    }

    async verifyHighlightedCompetitorsText(): Promise<void> {
    await expect(this.competitorsText).toBeVisible();
    }

    async verifyHeroDescription(): Promise<void> {
    await expect(this.heroDescription).toBeVisible();
    }

    async verifyHeroCTAs(): Promise<void> {
    await expect(this.heroStartAnalysisButton).toBeVisible();
    await expect(this.heroStartAnalysisButton).toBeEnabled();

    await expect(this.watchDemoButton).toBeVisible();
    }

    async verifyFeatureBadges(): Promise<void> {
    await expect(this.everyClaimVerified).toBeVisible();
    await expect(this.clickToEvidence).toBeVisible();
    await expect(this.honestConfidenceScores).toBeVisible();
    await expect(this.twoMinuteAnalysis).toBeVisible();
    }

    async verifyThreatScoreCard(): Promise<void> {
    await expect(this.threatScoreText).toBeVisible();
    await expect(this.threatScoreValue).toBeVisible();
    }

    async verifyConfidenceCard(): Promise<void> {
    await expect(this.confidenceText).toBeVisible();
    await expect(this.confidenceValue).toBeVisible();
    }

    async verifyEvidenceVerifiedCard(): Promise<void> {
    await expect(this.evidenceVerifiedText).toBeVisible();
    await expect(this.evidenceVerifiedValue).toBeVisible();
    }

    async verifyAgentActiveCard(): Promise<void> {
    await expect(this.agentActiveText).toBeVisible();
    await expect(this.researchAgentText).toBeVisible();
    }

    async verifyStatsCards(): Promise<void> {
    await this.verifyThreatScoreCard();
    await this.verifyConfidenceCard();
    await this.verifyEvidenceVerifiedCard();
    await this.verifyAgentActiveCard();
    }

    async verifyBackgroundVisual(): Promise<void> {
    const visual = this.page.locator("img, svg, canvas").first();
    await expect(visual).toBeVisible();
    }

    async verifyDesktopResponsiveLayout(): Promise<void> {
    await this.page.setViewportSize({
        width: 1440,
        height: 900,
    });

    await expect(this.brandName).toBeVisible();
    await expect(this.heroHeadline).toBeVisible();
    await expect(this.headerStartAnalysisButton).toBeVisible();

    await this.verifyStatsCards();
    }

    async verifyCompleteHeroSection(): Promise<void> {
    await this.verifyBranding();
    await this.verifyNavigationMenu();
    await this.verifyHeaderStartAnalysisButton();
    await this.verifyAgentsLiveBadge();
    await this.verifyHeroHeadline();
    await this.verifyHeroDescription();
    await this.verifyHeroCTAs();
    await this.verifyFeatureBadges();
    await this.verifyStatsCards();
    }

    async clickHeaderStartAnalysis(): Promise<void> {
    await expect(this.headerStartAnalysisButton).toBeVisible();
    await expect(this.headerStartAnalysisButton).toBeEnabled();
    await this.headerStartAnalysisButton.click();
    }
}