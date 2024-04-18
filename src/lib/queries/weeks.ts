import { error } from '@sveltejs/kit';

export async function getWorkoutWeeks(locals: App.Locals, { workoutId }: { workoutId: number }) {
	const { data: workoutWeeks, error: sbError } = await locals.supabase
		.from('workout_cycle_week')
		.select(
			`
            workout_week (
                id,
                week
            )
        `
		)
		.eq('workout_cycle_id', workoutId);

	if (sbError) {
		console.error('Error fetching workout weeks:', sbError);

		throw error(500, {
			message: sbError.message,
		});
	}

	return workoutWeeks;
}
