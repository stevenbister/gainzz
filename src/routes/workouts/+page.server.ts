import { getAllWorkoutCycles } from '$lib/queries/cycles';
import { getUserFromLocals } from '$lib/utils';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const user = await getUserFromLocals(locals);

	const workouts = getAllWorkoutCycles(locals, { userId: user.id });

	return { workouts };
};
