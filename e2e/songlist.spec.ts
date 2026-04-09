import { test, expect } from '@playwright/test';

test.describe('Songlist Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/songlist');
  });

  test('displays the Queue Status stat card', async ({ page }) => {
    await expect(page.getByTestId('queue-status-card')).toBeVisible();
  });

  test('displays the Songs in Queue stat card', async ({ page }) => {
    await expect(page.getByTestId('songs-in-queue-card')).toBeVisible();
  });

  test('displays the Songs Played stat card', async ({ page }) => {
    await expect(page.getByTestId('songs-played-card')).toBeVisible();
  });

  test('displays the Now Playing section', async ({ page }) => {
    await expect(page.getByTestId('now-playing')).toBeVisible();
  });

  test('displays the Request Queue section', async ({ page }) => {
    await expect(page.getByTestId('request-queue')).toBeVisible();
  });

  test('lists at least one song in the queue', async ({ page }) => {
    await expect(page.getByTestId('request-queue').getByTestId('song-entry-title').first()).toBeVisible();
  });

  test('displays the queue legend with Bumped label', async ({ page }) => {
    await expect(page.getByTestId('legend-bumped')).toBeVisible();
  });

  test('displays the queue legend with Shuffle Winner label', async ({
    page
  }) => {
    await expect(page.getByTestId('legend-shuffle-winner')).toBeVisible();
  });

  test('displays the queue legend with Shuffle Entrant label', async ({
    page
  }) => {
    await expect(page.getByTestId('legend-shuffle-entrant')).toBeVisible();
  });

  test('displays the History panel', async ({ page }) => {
    await expect(page.getByTestId('song-history')).toBeVisible();
  });
});
