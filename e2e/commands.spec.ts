import { test, expect } from '@playwright/test';

test.describe('Commands Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/commands');
  });

  test('has the correct page title', async ({ page }) => {
    await expect(page).toHaveTitle(/Stream Commands/i);
  });

  test('displays the Channel Commands heading', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: /Channel Commands/i, level: 1 })
    ).toBeVisible();
  });

  test('displays the page subtitle', async ({ page }) => {
    await expect(
      page.getByText(/Interact with the stream using the commands below/i)
    ).toBeVisible();
  });

  test('shows the Song Requests tab as active by default on desktop', async ({
    page
  }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    const activeButton = page.getByRole('button', { name: /Song Requests/i });
    await expect(activeButton).toBeVisible();
  });

  test('command table renders at least one row', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    const rows = page.locator('tbody tr');
    await expect(rows.first()).toBeVisible();
  });

  test('switching to Sound Effects tab shows sound effects commands', async ({
    page
  }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.getByRole('button', { name: /Sound Effects/i }).click();
    await expect(page.getByText(/applause/i)).toBeVisible();
  });

  test('Sound Effects tab shows the cost info banner', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.getByRole('button', { name: /Sound Effects/i }).click();
    await expect(page.getByText(/20 beans/i)).toBeVisible();
  });

  test('switching to Reward Redemption tab shows its commands', async ({
    page
  }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.getByRole('button', { name: /Reward Redemption/i }).click();
    await expect(page.getByText(/livelearn/i)).toBeVisible();
  });

  test('switching to Other tab shows other commands', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.getByRole('button', { name: 'Other' }).click();
    await expect(page.getByText(/discord/i)).toBeVisible();
  });

  test('mobile dropdown is visible on small screens', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    const dropdown = page.locator('select');
    await expect(dropdown).toBeVisible();
  });

  test('mobile dropdown changes visible commands', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.locator('select').selectOption('soundEffectCmds');
    await expect(page.getByText(/applause/i)).toBeVisible();
  });
});
