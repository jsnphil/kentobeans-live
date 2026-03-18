import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test('has correct page title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Kentobeans Live/);
  });

  test('displays hero heading', async ({ page }) => {
    await page.goto('/');
    await expect(
      page.getByRole('heading', { name: /Welcome to/i, level: 1 })
    ).toBeVisible();
  });

  test('displays navigation links to key sections', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('link', { name: /View Current Songlist/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /Bot Commands/i })).toBeVisible();
  });

  test('displays stream features section', async ({ page }) => {
    await page.goto('/');
    await expect(
      page.getByRole('heading', { name: /Stream Features/i })
    ).toBeVisible();
    await expect(page.getByRole('heading', { name: /Live Songlist/i })).toBeVisible();
    await expect(page.getByRole('heading', { name: /Song of the Night/i })).toBeVisible();
    await expect(page.getByRole('heading', { name: /Bot Commands/i })).toBeVisible();
  });

  test('displays Twitch link', async ({ page }) => {
    await page.goto('/');
    await expect(
      page.getByRole('link', { name: /Watch on Twitch/i })
    ).toBeVisible();
  });
});
