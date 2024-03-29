import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({
	locals: {
		supabase,
		// getSession
	},
}) => {
	// const session = await getSession()

	// if (!session) {
	//     throw redirect(303, '/')
	//   }

	// Test data is getting returned
	const { data: profile } = await supabase.from('user_profile').select('*').eq('id', 1).single();

	return { profile };
};
