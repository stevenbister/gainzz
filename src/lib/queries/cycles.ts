import type { User } from '@supabase/supabase-js';
import { error } from '@sveltejs/kit';

export async function getAllWorkoutCycles(locals: App.Locals, { userId }: { userId: User['id'] }) {
	const { data: workouts, error: sbError } = await locals.supabase
		.from('workout_cycle')
		.select('id, key')
		.eq('created_by', userId);

	if (sbError) {
		console.error('Error fetching workouts:', sbError);

		throw error(500, {
			message: sbError.message,
		});
	}

	return workouts;
}

export async function getWorkoutCycle(
	locals: App.Locals,
	{ workoutId, userId }: { workoutId: number; userId: User['id'] }
) {
	const { data: workout, error: sbError } = await locals.supabase
		.from('workout_cycle')
		.select('key')
		.eq('id', workoutId)
		.eq('created_by', userId)
		.single();

	if (sbError) {
		console.error('Error fetching workout:', sbError);

		throw error(500, {
			message: sbError.message,
		});
	}

	return workout;
}
