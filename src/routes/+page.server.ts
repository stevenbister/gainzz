import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals: { supabase, safeGetSession } }) => {
	const { session, user } = await safeGetSession();

	if (!session || !user) {
		throw redirect(303, '/login');
	}

	// Test data is getting returned
	const { data: profile } = await supabase
		.from('user_profile')
		.select('*')
		.eq('user_id', user.id)
		.single();

	return { profile };
};
