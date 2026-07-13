import { expect, test } from '@playwright/test';

test('renders the responsive game experience', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  await expect(page.getByRole('textbox', { name: /nickname/i })).toBeVisible();
  await expect(page.getByText(/mejores tiempos/i)).toBeVisible();
});

test('starts a game after nickname registration', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('textbox', { name: /nickname/i }).fill('Player One');
  await page.getByRole('button', { name: /start game/i }).click();

  await expect(page.getByRole('group', { name: /tablero de letras|letter board/i })).toBeVisible();
});

test('switches between Spanish and English', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('button', { name: /cambiar a inglés/i }).click();
  await expect(page.getByRole('heading', { name: /enter the challenge/i })).toBeVisible();
});
