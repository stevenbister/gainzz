import { expect, test } from './fixtures';

test('smoke test', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'Hello, Bob!' })).toBeVisible();
});
