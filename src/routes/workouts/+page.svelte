<script lang="ts">
	import CardList from '$lib/components/Card/CardList.svelte';
	import SimpleCard from '$lib/components/Card/SimpleCard.svelte';
	import Heading from '$lib/components/Heading/Heading.svelte';
	import { padNumber } from '$lib/utils';

	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Heading title="Workouts" />

{#if data}
	<CardList class="mt-3">
		{#await data.workouts}
			<!-- TODO: Need some nice skeleton or something -->
			<p>...loading...</p>
		{:then workouts}
			{#each workouts as workout}
				<SimpleCard
					title={`Cycle #${padNumber(workout.key)}`}
					href={`/workouts/${workout.id}`}
				/>
			{/each}
		{/await}
	</CardList>
{/if}
