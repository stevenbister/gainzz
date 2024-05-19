<script lang="ts">
	import Card from '$lib/components/Card/Card.svelte';
	import CardList from '$lib/components/Card/CardList.svelte';
	import WorkoutDayCard from '$lib/components/Card/WorkoutDayCard.svelte';
	import Heading from '$lib/components/Heading/Heading.svelte';
	import { padNumber } from '$lib/utils';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Heading title={`Week #${padNumber(data.workoutWeek.week)}`} />

{#if data}
	<CardList class="mt-3">
		{#await data.workoutDays}
			<!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
			{#each Array(5) as _, index (index)}
				<Card skeleton style="height: 112px" />
			{/each}
		{:then days}
			{#if days.length === 0}
				<p>No days found.</p>
			{/if}

			{#each days as day (day.id)}
				{#if day.day}
					{#await data.workouts}
						<Card skeleton style="height: 112px" />
					{:then workouts}
						{#if workouts.length === 0}
							<p>No workouts found.</p>
						{/if}

						{#each workouts as workout (workout.workout?.id)}
							{#if workout.workout?.id === day.workout_id}
								<WorkoutDayCard
									title={`Day #${padNumber(day.day)}`}
									subTitle={workout.workout?.nickname ?? ''}
									href={`/workouts/${data.workoutId}/week/${data.weekId}/day/${day.id}`}
									exerciseCount={day.workout_day_exercise[0].count}
								/>
							{/if}
						{/each}
					{/await}
				{/if}
			{/each}
		{/await}
	</CardList>
{/if}
