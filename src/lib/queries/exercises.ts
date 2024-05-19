import { error } from '@sveltejs/kit';

export async function getWorkoutDayExercisesByWorkoutDayId(
	locals: App.Locals,
	{ workoutDayId }: { workoutDayId: number }
) {
	const { data: workoutDayExercises, error: sbError } = await locals.supabase
		.from('workout_day_exercise')
		.select(
			`
            id,
            workout_day_id,
            exercise_id,
            sets,
            reps,
            weight,
            exercise (
                name
            )
        `
		)
		.eq('workout_day_id', workoutDayId);

	if (sbError) {
		console.error('Error fetching workout day exercises:', sbError);

		throw error(500, {
			message: sbError.message,
		});
	}

	return workoutDayExercises;
}
