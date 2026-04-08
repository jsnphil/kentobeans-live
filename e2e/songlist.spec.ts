import { test, expect } from '@playwright/test';

test.describe('Songlist Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/songlist');
  });

  test('displays the Queue Status stat card', async ({ page }) => {
    await expect(page.getByText('Queue Status')).toBeVisible();
  });

  test('displays the Songs in Queue stat card', async ({ page }) => {
    await expect(page.getByText('Songs in Queue')).toBeVisible();
  });

  test('displays the Songs Played stat card', async ({ page }) => {
    await expect(page.getByText('Songs Played')).toBeVisible();
  });

  test('displays the Now Playing section', async ({ page }) => {
    await expect(page.getByText('Now Playing')).toBeVisible();
  });

  test('displays the Request Queue section', async ({ page }) => {
    await expect(page.getByText('Request Queue')).toBeVisible();
  });

  test('lists at least one song in the queue', async ({ page }) => {
    await expect(page.getByText('Midnight Drive')).toBeVisible();
  });

  test('displays the queue legend with Bumped label', async ({ page }) => {
    await expect(page.getByText('Bumped')).toBeVisible();
  });

  test('displays the queue legend with Shuffle Winner label', async ({
    page
  }) => {
    await expect(page.getByText('Shuffle Winner')).toBeVisible();
  });

  test('displays the queue legend with Shuffle Entrant label', async ({
    page
  }) => {
    await expect(page.getByText('Shuffle Entrant')).toBeVisible();
  });

  test('displays the History panel', async ({ page }) => {
    await expect(page.getByText('History')).toBeVisible();
  });
});
