import { error } from '@sveltejs/kit';

export async function getWorkoutDayById(locals: App.Locals, { workoutId }: { workoutId: number }) {
	const { data: workoutDay, error: sbError } = await locals.supabase
		.from('workout_day')
		.select(
			`
			id,
			day,
			workout (
				nickname
			)
		`
		)
		.eq('id', workoutId)
		.single();

	if (sbError) {
		console.error('Error fetching workout day:', sbError);

		throw error(500, {
			message: sbError.message,
		});
	}

	return workoutDay;
}

type GetWorkoutDaysByWeekIdFn = Promise<
	{
		id: number;
		workout_week_id: number | null;
		workout_id: number | null;
		day: number;
		workout_day_exercise: { count: number }[];
	}[]
>;

export async function getWorkoutDaysByWeekId(
	locals: App.Locals,
	{ workoutWeekId }: { workoutId: number; workoutWeekId: number }
): GetWorkoutDaysByWeekIdFn {
	const { data: workoutDays, error: sbError } = await locals.supabase
		.from('workout_day')
		.select(
			`
			id,
			workout_week_id,
			workout_id,
			day,
			workout_day_exercise(count)
		`
		)
		.eq('workout_week_id', workoutWeekId);

	if (sbError) {
		console.error('Error fetching workout days:', sbError);

		throw error(500, {
			message: sbError.message,
		});
	}

	return workoutDays as unknown as GetWorkoutDaysByWeekIdFn;
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
