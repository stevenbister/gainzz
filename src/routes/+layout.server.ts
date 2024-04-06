import type { LayoutServerLoad } from './$types';

// Make the session available across the UI, including pages and layouts
export const load: LayoutServerLoad = async ({ locals: { safeGetSession } }) => {
	const { session, user } = await safeGetSession();

	return {
		session,
		user,
	};
};
