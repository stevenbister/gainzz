import { getWorkoutDaysByWeekId, getWorkoutsByWeekId } from '$lib/queries/days';
import { getWorkoutWeekById } from '$lib/queries/weeks';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, locals }) => {
	const workoutId = Number(params.workoutId);
	const weekId = Number(params.weekId);

	const workoutDays = getWorkoutDaysByWeekId(locals, { workoutId, workoutWeekId: weekId });
	const workouts = getWorkoutsByWeekId(locals, { workoutId, workoutWeekId: weekId });
	const workoutWeek = await getWorkoutWeekById(locals, { weekId });

	return { workoutId, weekId, workoutDays, workouts, workoutWeek };
};
