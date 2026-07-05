import { expect, Locator, Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;

  readonly brandName: Locator;
  readonly title: Locator;
  readonly subtitle: Locator;

  readonly emailLabel: Locator;
  readonly emailInput: Locator;

  readonly passwordLabel: Locator;
  readonly passwordInput: Locator;

  readonly keepLoggedInCheckbox: Locator;
  readonly keepLoggedInText: Locator;

  readonly forgotPasswordLink: Locator;
  readonly signInButton: Locator;
  readonly signUpLink: Locator;

  readonly loginErrorMessage: Locator;
  readonly emailValidationMessage: Locator;
  readonly passwordValidationMessage: Locator;

  constructor(page: Page) {
    this.page = page;

    this.brandName = page.getByText("Argus", { exact: true });
    this.title = page.getByRole("heading", { name: "Welcome back" });
    this.subtitle = page.getByText("Please enter your account details");

    this.emailLabel = page.getByText("Email", { exact: true });
    this.emailInput = page.getByPlaceholder("you@example.com");

    this.passwordLabel = page.getByText("Password", { exact: true });
    this.passwordInput = page.locator('input[type="password"]');

    this.keepLoggedInCheckbox = page.locator('input[type="checkbox"]');
    this.keepLoggedInText = page.getByText("Keep me logged in");

    this.forgotPasswordLink = page.getByText("Forgot password?");
    this.signInButton = page.getByRole("button", { name: "Sign in" });
    this.signUpLink = page.getByText("Sign up", { exact: true });

    this.loginErrorMessage = page.locator(
      'text=/invalid|incorrect|failed|wrong|not found|unauthorized|error/i'
    );

    this.emailValidationMessage = page.locator(
      'text=/email is required|required email|valid email|invalid email|enter email/i'
    );

    this.passwordValidationMessage = page.locator(
      'text=/password is required|required password|enter password/i'
    );
  }

  async goto() {
    await this.page.goto("http://localhost:5174/login");
  }

  async verifyLoginFormVisible() {
    await expect(this.brandName).toBeVisible();
    await expect(this.title).toBeVisible();
    await expect(this.subtitle).toBeVisible();
    await expect(this.emailInput).toBeVisible();
    await expect(this.passwordInput).toBeVisible();
    await expect(this.keepLoggedInCheckbox).toBeVisible();
    await expect(this.forgotPasswordLink).toBeVisible();
    await expect(this.signInButton).toBeVisible();
    await expect(this.signUpLink).toBeVisible();
  }

  async verifyEmailFieldUI() {
    await expect(this.emailLabel).toBeVisible();
    await expect(this.emailInput).toBeVisible();
    await expect(this.emailInput).toHaveAttribute("placeholder", "you@example.com");
  }

  async verifyEmailFieldAcceptsText() {
    await this.emailInput.fill("test@example.com");
    await expect(this.emailInput).toHaveValue("test@example.com");
  }

  async verifyPasswordFieldUI() {
    await expect(this.passwordLabel).toBeVisible();
    await expect(this.passwordInput).toBeVisible();
    await expect(this.passwordInput).toHaveAttribute("type", "password");
  }

  async verifyPasswordFieldAcceptsText() {
    await this.passwordInput.fill("Password@123");
    await expect(this.passwordInput).toHaveValue("Password@123");
  }

  async verifyKeepMeLoggedInDefaultState() {
    await expect(this.keepLoggedInText).toBeVisible();
    await expect(this.keepLoggedInCheckbox).toBeChecked();
  }

  async verifyKeepMeLoggedInToggle() {
    await this.keepLoggedInCheckbox.uncheck();
    await expect(this.keepLoggedInCheckbox).not.toBeChecked();

    await this.keepLoggedInCheckbox.check();
    await expect(this.keepLoggedInCheckbox).toBeChecked();
  }

  async verifyForgotPasswordLinkVisible() {
    await expect(this.forgotPasswordLink).toBeVisible();
  }

  async verifySignInButtonVisibleAndEnabled() {
    await expect(this.signInButton).toBeVisible();
    await expect(this.signInButton).toBeEnabled();
  }

  async verifySignUpLinkVisible() {
    await expect(this.signUpLink).toBeVisible();
  }

  async verifyRequiredValidationForEmptyForm() {
    await this.emailInput.fill("");
    await this.passwordInput.fill("");
    await this.signInButton.click();

    await expect(this.emailInput).toBeVisible();
    await expect(this.passwordInput).toBeVisible();
  }

  async verifyFormLayoutStable() {
    await this.emailInput.click();
    await this.passwordInput.click();
    await this.keepLoggedInCheckbox.click();

    await expect(this.title).toBeVisible();
    await expect(this.emailInput).toBeVisible();
    await expect(this.passwordInput).toBeVisible();
    await expect(this.signInButton).toBeVisible();
  }

  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.signInButton.click();
  }

  async verifyLoginWithInvalidEmail() {
    await this.login("invaliduser@example.com", "Password@123");

    await expect(this.page).toHaveURL(/login/);
    await expect(this.loginErrorMessage.first()).toBeVisible({ timeout: 10000 });
  }

  async verifyLoginWithInvalidPassword() {
    await this.login("test@example.com", "WrongPassword@123");

    await expect(this.page).toHaveURL(/login/);
    await expect(this.loginErrorMessage.first()).toBeVisible({ timeout: 10000 });
  }

  async verifyInvalidEmailFormatValidation() {
    await this.login("test@", "Password@123");

    await expect(this.page).toHaveURL(/login/);
  }

  async verifyPasswordCannotBeEmpty() {
    await this.emailInput.fill("test@example.com");
    await this.passwordInput.fill("");
    await this.signInButton.click();

    await expect(this.page).toHaveURL(/login/);
    await expect(this.passwordInput).toBeVisible();
  }

  async verifyEmailCannotBeEmpty() {
    await this.emailInput.fill("");
    await this.passwordInput.fill("Password@123");
    await this.signInButton.click();

    await expect(this.page).toHaveURL(/login/);
    await expect(this.emailInput).toBeVisible();
  }

  async verifyForgotPasswordNavigation() {
    await this.forgotPasswordLink.click();

    await expect(this.page).not.toHaveURL(/\/login$/);
  }

  async verifySignUpNavigation() {
    await this.signUpLink.click();

    await expect(this.page).not.toHaveURL(/\/login$/);
  }

  async verifySqlInjectionInputNotAccepted() {
    await this.login("' OR '1'='1", "' OR '1'='1");

    await expect(this.page).toHaveURL(/login/);
  }

  async verifyXssInputNotExecuted() {
    let dialogOpened = false;

    this.page.on("dialog", async (dialog) => {
      dialogOpened = true;
      await dialog.dismiss();
    });

    await this.login(
      `<script>alert("xss")</script>`,
      `<script>alert("xss")</script>`
    );

    expect(dialogOpened).toBeFalsy();
    await expect(this.page).toHaveURL(/login/);
  }

  async verifyLoginButtonPreventsMultipleRapidSubmissions() {
    await this.emailInput.fill("test@example.com");
    await this.passwordInput.fill("WrongPassword@123");

    await Promise.all([
      this.signInButton.click(),
      this.signInButton.click(),
      this.signInButton.click(),
    ]);

    await expect(this.page).toHaveURL(/login/);
  }

  async verifyGenericErrorForInvalidLogin() {
    await this.login("notregistered@example.com", "Password@123");

    await expect(this.page).toHaveURL(/login/);
    await expect(this.loginErrorMessage.first()).toBeVisible({ timeout: 10000 });
  }
}

// import { expect, Locator, Page } from "@playwright/test";

// export class LoginPage {
//   readonly page: Page;

//   readonly brandName: Locator;
//   readonly title: Locator;
//   readonly subtitle: Locator;

//   readonly emailLabel: Locator;
//   readonly emailInput: Locator;

//   readonly passwordLabel: Locator;
//   readonly passwordInput: Locator;

//   readonly keepLoggedInCheckbox: Locator;
//   readonly keepLoggedInText: Locator;

//   readonly forgotPasswordLink: Locator;
//   readonly signInButton: Locator;
//   readonly signUpLink: Locator;

//   constructor(page: Page) {
//     this.page = page;

//     this.brandName = page.getByText("Argus", { exact: true });
//     this.title = page.getByRole("heading", { name: "Welcome back" });
//     this.subtitle = page.getByText("Please enter your account details");

//     this.emailLabel = page.getByText("Email", { exact: true });
//     this.emailInput = page.getByPlaceholder("you@example.com");

//     this.passwordLabel = page.getByText("Password", { exact: true });
//     this.passwordInput = page.locator('input[type="password"]');

//     this.keepLoggedInCheckbox = page.locator('input[type="checkbox"]');
//     this.keepLoggedInText = page.getByText("Keep me logged in");

//     this.forgotPasswordLink = page.getByText("Forgot password?");
//     this.signInButton = page.getByRole("button", { name: "Sign in" });
//     this.signUpLink = page.getByText("Sign up", { exact: true });
//   }

//   async goto() {
//     await this.page.goto("http://localhost:5174/login");
//   }

//   async verifyLoginFormVisible() {
//     await expect(this.brandName).toBeVisible();
//     await expect(this.title).toBeVisible();
//     await expect(this.subtitle).toBeVisible();
//     await expect(this.emailInput).toBeVisible();
//     await expect(this.passwordInput).toBeVisible();
//     await expect(this.keepLoggedInCheckbox).toBeVisible();
//     await expect(this.forgotPasswordLink).toBeVisible();
//     await expect(this.signInButton).toBeVisible();
//     await expect(this.signUpLink).toBeVisible();
//   }

//   async verifyEmailFieldUI() {
//     await expect(this.emailLabel).toBeVisible();
//     await expect(this.emailInput).toBeVisible();
//     await expect(this.emailInput).toHaveAttribute("placeholder", "you@example.com");
//   }

//   async verifyEmailFieldAcceptsText() {
//     await this.emailInput.fill("test@example.com");
//     await expect(this.emailInput).toHaveValue("test@example.com");
//   }

//   async verifyPasswordFieldUI() {
//     await expect(this.passwordLabel).toBeVisible();
//     await expect(this.passwordInput).toBeVisible();
//     await expect(this.passwordInput).toHaveAttribute("type", "password");
//   }

//   async verifyPasswordFieldAcceptsText() {
//     await this.passwordInput.fill("Password@123");
//     await expect(this.passwordInput).toHaveValue("Password@123");
//   }

//   async verifyKeepMeLoggedInDefaultState() {
//     await expect(this.keepLoggedInText).toBeVisible();
//     await expect(this.keepLoggedInCheckbox).toBeChecked();
//   }

//   async verifyKeepMeLoggedInToggle() {
//     await this.keepLoggedInCheckbox.uncheck();
//     await expect(this.keepLoggedInCheckbox).not.toBeChecked();

//     await this.keepLoggedInCheckbox.check();
//     await expect(this.keepLoggedInCheckbox).toBeChecked();
//   }

//   async verifyForgotPasswordLinkVisible() {
//     await expect(this.forgotPasswordLink).toBeVisible();
//   }

//   async verifySignInButtonVisibleAndEnabled() {
//     await expect(this.signInButton).toBeVisible();
//     await expect(this.signInButton).toBeEnabled();
//   }

//   async verifySignUpLinkVisible() {
//     await expect(this.signUpLink).toBeVisible();
//   }

//   async verifyRequiredValidationForEmptyForm() {
//     await this.emailInput.fill("");
//     await this.passwordInput.fill("");
//     await this.signInButton.click();

//     await expect(this.emailInput).toBeVisible();
//     await expect(this.passwordInput).toBeVisible();
//   }

//   async verifyFormLayoutStable() {
//     await this.emailInput.click();
//     await this.passwordInput.click();
//     await this.keepLoggedInCheckbox.click();

//     await expect(this.title).toBeVisible();
//     await expect(this.emailInput).toBeVisible();
//     await expect(this.passwordInput).toBeVisible();
//     await expect(this.signInButton).toBeVisible();
//   }
// }