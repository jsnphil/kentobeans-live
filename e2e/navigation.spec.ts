import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('renders the site logo link', async ({ page }) => {
    await expect(
      page.getByRole('link', { name: /Kentobeans Live Logo/i })
    ).toBeVisible();
  });

  test('logo link points to the home page', async ({ page }) => {
    const logo = page.getByRole('link', { name: /Kentobeans Live Logo/i });
    await expect(logo).toHaveAttribute('href', '/');
  });

  test('desktop nav shows Home link', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
  });

  test('desktop nav shows Commands link', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await expect(
      page.getByRole('link', { name: 'Commands' })
    ).toBeVisible();
  });

  test('desktop nav shows Songlist link', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await expect(
      page.getByRole('link', { name: 'Songlist' })
    ).toBeVisible();
  });

  test('desktop nav shows About link', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await expect(page.getByRole('link', { name: 'About' })).toBeVisible();
  });

  test('navigating to Commands page works', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.getByRole('link', { name: 'Commands' }).click();
    await expect(page).toHaveURL(/\/commands/);
    await expect(
      page.getByRole('heading', { name: /Channel Commands/i })
    ).toBeVisible();
  });

  test('navigating to Songlist page works', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.getByRole('link', { name: 'Songlist' }).click();
    await expect(page).toHaveURL(/\/songlist/);
  });

  test('navigating to About page works', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.getByRole('link', { name: 'About' }).click();
    await expect(page).toHaveURL(/\/about/);
  });

  test('mobile hamburger button is visible on small screens', async ({
    page
  }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(
      page.getByRole('button', { name: /Toggle menu/i })
    ).toBeVisible();
  });

  test('desktop nav links are hidden on small screens', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    const homeLink = page.locator('.hidden.md\\:block').getByRole('link', {
      name: 'Home'
    });
    await expect(homeLink).toBeHidden();
  });

  test('clicking the hamburger opens the mobile menu', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    const toggle = page.getByRole('button', { name: /Toggle menu/i });
    await toggle.click();
    const mobileMenu = page.locator('.md\\:hidden').last();
    await expect(mobileMenu).toBeVisible();
  });

  test('mobile menu contains navigation links after opening', async ({
    page
  }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.getByRole('button', { name: /Toggle menu/i }).click();
    await expect(
      page.locator('.md\\:hidden a[href="/commands"]').last()
    ).toBeVisible();
  });
});
