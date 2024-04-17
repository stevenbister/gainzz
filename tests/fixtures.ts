import { test as baseTest } from '@playwright/test';
import fs from 'fs';
import path from 'path';

export * from '@playwright/test';
export const test = baseTest.extend<object, { workerStorageState: string }>({
	// Use the same storage state for all tests in this worker.
	storageState: ({ workerStorageState }, use) => use(workerStorageState),

	// Authenticate once per worker with a worker-scoped fixture.
	workerStorageState: [
		async ({ browser }, use) => {
			// Use parallelIndex as a unique identifier for each worker.
			const id = test.info().parallelIndex;
			const fileName = path.resolve(test.info().project.outputDir, `.auth/${id}.json`);

			if (fs.existsSync(fileName)) {
				// Reuse existing authentication state if any.
				await use(fileName);
				return;
			}

			// Important: make sure we authenticate in a clean environment by unsetting storage state.
			const page = await browser.newPage({ storageState: undefined });

			// Our test user account.
			const account = {
				email: 'bob@test.com',
				password: 'reallysecurepassword',
			};

			// Perform authentication steps. Replace these actions with your own.
			await page.goto('http://localhost:4173/login');
			await page.getByLabel('email').fill(account.email);
			await page.getByLabel('password').fill(account.password);
			await page.getByRole('button', { name: 'Log in' }).click();
			// Wait until the page receives the cookies.
			//
			// Sometimes login flow sets cookies in the process of several redirects.
			// Wait for the final URL to ensure that the cookies are actually set.
			await page.waitForURL('http://localhost:4173/workouts');

			// End of authentication steps.

			await page.context().storageState({ path: fileName });
			await page.close();
			await use(fileName);
		},
		{ scope: 'worker' },
	],
});
