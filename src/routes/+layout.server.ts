import type { LayoutServerLoad } from './$types';

// Make the session available across the UI, including pages and layouts
export const load: LayoutServerLoad = async ({ locals: { getSession } }) => {
	return {
		session: await getSession(),
	};
};
