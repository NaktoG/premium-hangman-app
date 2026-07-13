import { expect, test } from '@playwright/test';

test('renders the responsive game experience', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  await expect(page.getByRole('group')).toBeVisible();
});

test('switches between Spanish and English', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('button', { name: /cambiar a inglés/i }).click();
  await expect(page.getByText(/premium game/i)).toBeVisible();
});
