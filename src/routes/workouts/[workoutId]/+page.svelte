<script lang="ts">
	import Card from '$lib/components/Card/Card.svelte';
	import CardList from '$lib/components/Card/CardList.svelte';
	import SimpleCard from '$lib/components/Card/SimpleCard.svelte';
	import Heading from '$lib/components/Heading/Heading.svelte';
	import { padNumber } from '$lib/utils';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Heading title={`Cycle #${padNumber(data.workout?.key)}`} />

{#if data}
	<CardList class="mt-3">
		{#await data.workoutWeeks}
			<!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
			{#each Array(5) as _, index (index)}
				<Card skeleton style="height: 54px;" />
			{/each}
		{:then weeks}
			{#if weeks.length === 0}
				<p>No weeks found.</p>
			{/if}

			{#each weeks as week (week.workout_week?.id)}
				{#if week.workout_week}
					<SimpleCard
						title={`Week #${padNumber(week.workout_week?.week)}`}
						href={`/workouts/${data.workoutId}/week/${week.workout_week?.id}`}
					/>
				{/if}
			{/each}
		{/await}
	</CardList>
{/if}
