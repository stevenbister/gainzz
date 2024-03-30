import { getUser } from '$lib/utils';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals: { supabase, getSession } }) => {
	const session = await getSession();

	if (!session) {
		throw redirect(303, '/login');
	}

	const user = await getUser(supabase);

	// Test data is getting returned
	const { data: profile } = await supabase
		.from('user_profile')
		.select('*')
		.eq('user_id', user.id)
		.single();

	return { profile };
};
