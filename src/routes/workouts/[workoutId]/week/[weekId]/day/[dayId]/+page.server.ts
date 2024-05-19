import { getWorkoutDayById } from '$lib/queries/days';
import { getWorkoutDayExercisesByWorkoutDayId } from '$lib/queries/exercises';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, locals }) => {
	const dayId = Number(params.dayId);

	const workoutDayExercises = getWorkoutDayExercisesByWorkoutDayId(locals, {
		workoutDayId: dayId,
	});
	const workoutDay = await getWorkoutDayById(locals, { workoutId: dayId });

	return {
		workoutDay,
		workoutDayExercises,
	};
};
