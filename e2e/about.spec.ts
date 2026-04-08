import { test, expect } from '@playwright/test';

test.describe('About Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/about');
  });

  test('has the correct page title', async ({ page }) => {
    await expect(page).toHaveTitle(/About/i);
  });

  test('displays the Kentobeans7 heading', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: /Kentobeans7/i, level: 1 })
    ).toBeVisible();
  });

  test('displays the streamer description', async ({ page }) => {
    await expect(
      page.getByText(/music streamer and drummer from Nashville/i)
    ).toBeVisible();
  });

  test('displays the Equipment section heading', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: /Equipment/i })
    ).toBeVisible();
  });

  test('displays drum equipment in the table', async ({ page }) => {
    await expect(page.getByText(/Gretsch Renown Maple/i)).toBeVisible();
  });

  test('displays streaming equipment in the table on desktop', async ({
    page
  }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await expect(page.getByText(/Focusrite Clarett/i).first()).toBeVisible();
  });

  test('displays the Tech section with Kentobot heading', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: /Kentobot\/Kentobeans\.live/i })
    ).toBeVisible();
  });

  test('displays the "Powered by" section', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: /Powered by/i })
    ).toBeVisible();
  });

  test('displays the disclaimer footer', async ({ page }) => {
    await expect(
      page.getByText(/not affiliated with any of brands/i)
    ).toBeVisible();
  });
});
