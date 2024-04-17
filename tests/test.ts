import { expect, test } from './fixtures';

test('smoke test', async ({ page }) => {
	await page.goto('/workouts');

	await expect(page.getByRole('heading', { name: 'Workouts' })).toBeVisible();
});
