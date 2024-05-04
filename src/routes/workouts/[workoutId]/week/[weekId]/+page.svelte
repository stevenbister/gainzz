<script lang="ts">
	import Card from '$lib/components/Card/Card.svelte';
	import CardList from '$lib/components/Card/CardList.svelte';
	import Heading from '$lib/components/Heading/Heading.svelte';
	import Icon from '$lib/components/Icon/Icon.svelte';
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
				<Card skeleton />
			{/each}
		{:then days}
			{#if days.length === 0}
				<p>No days found.</p>
			{/if}

			{#each days as day (day.id)}
				{#if day.day}
					{#await data.workouts then workouts}
						{#if workouts.length > 0}
							{#each workouts as workout (workout.workout?.id)}
								{#if workout.workout?.id === day.workout_id}
									<Card blockLink>
										<Heading
											title={`Day #${padNumber(day.day)}`}
											subTitle={workout.workout?.nickname ?? ''}
											size="sm"
										/>

										<a
											href={`/workouts/${data.workoutId}/week/${data.weekId}/day/${day.id}`}
										>
											<Icon sprite="arrow-right" />
										</a>
									</Card>
								{/if}
							{/each}
						{/if}
					{/await}
				{/if}
			{/each}
		{/await}
	</CardList>
{/if}
