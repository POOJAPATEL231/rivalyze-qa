import { test as setup } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

setup('authenticate', async ({ page }) => {
  const email = process.env.USER_EMAIL;
  const password = process.env.USER_PASSWORD;

  if (!email || !password) {
    throw new Error('USER_EMAIL or USER_PASSWORD is missing');
  }

  await page.goto('https://polite-smoke-09499ae00.7.azurestaticapps.net/login');
  await page.getByPlaceholder('you@example.com').fill(email);
  await page.locator('input[type="password"]').fill(password);
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.waitForURL('**/brief');

  await page.context().storageState({
    path: 'playwright/.auth/user.json',
  });
});