<script lang="ts">
	import Heading from '../Heading/Heading.svelte';
	import Card from './Card.svelte';

	export let name: string;
	export let weight: string;
	export let reps: string;
	export let sets: number;
</script>

<Card>
	<div>
		<Heading title={name} size="sm" />

		<div class="d-flex gap-0 mt--1">
			<Heading title={weight} subTitle="Weight" size="sm" />
			<Heading title={reps} subTitle="Reps" size="sm" />
			<Heading title={sets.toString()} subTitle="Sets" size="sm" />
		</div>
	</div>
</Card>
