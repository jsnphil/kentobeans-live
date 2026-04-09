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
    await expect(page.getByTestId('streamer-bio')).toBeVisible();
  });

  test('displays the Equipment section heading', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: /Equipment/i })
    ).toBeVisible();
  });

  test('displays drum equipment section', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await expect(page.getByTestId('equipment-drums')).toBeVisible();
  });

  test('displays streaming equipment section on desktop', async ({
    page
  }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await expect(page.getByTestId('equipment-streaming')).toBeVisible();
  });

  test('displays the Tech section with Kentobot heading', async ({ page }) => {
    await expect(page.getByTestId('tech-section')).toBeVisible();
  });

  test('displays the "Powered by" section', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: /Powered by/i })
    ).toBeVisible();
  });

  test('displays the disclaimer footer', async ({ page }) => {
    await expect(page.getByTestId('disclaimer')).toBeVisible();
  });
});
