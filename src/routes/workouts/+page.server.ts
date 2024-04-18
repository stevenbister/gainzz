import { getUserFromLocals } from '$lib/utils';
import { error as kitError } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const user = await getUserFromLocals(locals);

	const { data: workouts, error } = await locals.supabase
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
