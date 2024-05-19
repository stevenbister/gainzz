<script lang="ts">
	import Card from '$lib/components/Card/Card.svelte';
	import CardList from '$lib/components/Card/CardList.svelte';
	import SimpleCard from '$lib/components/Card/SimpleCard.svelte';
	import Heading from '$lib/components/Heading/Heading.svelte';
	import { padNumber } from '$lib/utils';

	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Heading title="Workouts" class="pt-3" />

{#if data}
	<CardList class="mt-3">
		{#await data.workouts}
			<!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
			{#each Array(5) as _, index (index)}
				<Card skeleton style="height: 54px;" />
			{/each}
		{:then workouts}
			{#if workouts.length === 0}
				<p>No workouts found.</p>
			{/if}

			{#each workouts as workout (workout.id)}
				<SimpleCard
					title={`Cycle #${padNumber(workout.key)}`}
					href={`/workouts/${workout.id}`}
				/>
			{/each}
		{/await}
	</CardList>
{/if}
