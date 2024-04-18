<script lang="ts">
	import CardList from '$lib/components/Card/CardList.svelte';
	import SimpleCard from '$lib/components/Card/SimpleCard.svelte';
	import Heading from '$lib/components/Heading/Heading.svelte';
	import { padNumber } from '$lib/utils';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Heading title={`Cycle: #${padNumber(data.workout?.key)}`} />

{#if data}
	<CardList class="mt-3">
		{#await data.workoutWeeks}
			<!-- TODO: Need some nice skeleton or something -->
			<p>...loading...</p>
		{:then weeks}
			{#each weeks as week}
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
