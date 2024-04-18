import { getWorkoutWeeks } from '$lib/queries/weeks';
import { getUserFromLocals } from '$lib/utils';
import { getWorkoutCycle } from '~/src/lib/queries/cycles';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, locals }) => {
	const user = await getUserFromLocals(locals);

	const workoutId = Number(params.workoutId);

	const workout = await getWorkoutCycle(locals, { workoutId, userId: user.id });

	const workoutWeeks = getWorkoutWeeks(locals, { workoutId });

	return {
		workoutId,
		workout,
		workoutWeeks,
	};
};
