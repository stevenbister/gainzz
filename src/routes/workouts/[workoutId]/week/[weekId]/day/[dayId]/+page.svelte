<script lang="ts">
	import BackArrow from '$lib/components/BackArrow/BackArrow.svelte';
	import Card from '$lib/components/Card/Card.svelte';
	import CardList from '$lib/components/Card/CardList.svelte';
	import ExerciseDayCard from '$lib/components/Card/ExerciseDayCard.svelte';
	import Heading from '$lib/components/Heading/Heading.svelte';
	import { padNumber } from '$lib/utils';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<BackArrow />

<Heading
	title={`Day #${padNumber(data.workoutDay?.day)}`}
	subTitle={data.workoutDay.workout?.nickname ?? ''}
/>

{#if data}
	<CardList class="mt-3">
		{#await data.workoutDayExercises}
			<!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
			{#each Array(5) as _, index (index)}
				<Card skeleton style="height: 112px" />
			{/each}
		{:then exercises}
			{#if exercises.length === 0}
				<p>No exercises found.</p>
			{/if}

			{#each exercises as exercise (exercise.id)}
				<ExerciseDayCard
					name={exercise.exercise?.name ?? 'No name set'}
					weight={exercise.weight}
					reps={exercise.reps}
					sets={exercise.sets}
				/>
			{/each}
		{/await}
	</CardList>
{/if}
