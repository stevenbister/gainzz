import { error } from '@sveltejs/kit';

export async function getWorkoutDaysByWeekId(
	locals: App.Locals,
	{ workoutWeekId }: { workoutId: number; workoutWeekId: number }
) {
	const { data: workoutDays, error: sbError } = await locals.supabase
		.from('workout_day')
		.select('id, workout_week_id, workout_id, day')
		.eq('workout_week_id', workoutWeekId);

	if (sbError) {
		console.error('Error fetching workout days:', sbError);

		throw error(500, {
			message: sbError.message,
		});
	}

	return workoutDays;
}

export async function getWorkoutsByWeekId(
	locals: App.Locals,
	{ workoutWeekId }: { workoutId: number; workoutWeekId: number }
) {
	const { data: workout, error: sbError } = await locals.supabase
		.from('workout_day')
		.select(
			`
            workout (
                id,
                nickname
            )
        `
		)
		.eq('workout_week_id', workoutWeekId);

	if (sbError) {
		console.error('Error fetching workout days:', sbError);

		throw error(500, {
			message: sbError.message,
		});
	}

	return workout;
}
