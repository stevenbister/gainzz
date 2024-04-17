import { error as kitError } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals: { supabase, safeGetSession } }) => {
	const { user } = await safeGetSession();

	if (!user) {
		throw kitError(401, {
			message: 'Unauthorized',
		});
	}

	const { data: workouts, error } = await supabase
		.from('workout_cycle')
		.select('id, key')
		.eq('created_by', user.id);

	if (error) {
		console.error('Error fetching workouts:', error);

		throw kitError(500, {
			message: error.message,
		});
	}

	return { workouts };
};
