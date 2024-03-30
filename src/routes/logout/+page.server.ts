import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const actions = {
	default: async ({ locals: { supabase } }) => {
		await supabase.auth.signOut();
		redirect(303, '/');
	},
};

// we only use this endpoint for the api
// and don't need to see the page
export const load: PageServerLoad = async ({ locals: { supabase } }) => {
	await supabase.auth.signOut();
	redirect(303, '/');
};
