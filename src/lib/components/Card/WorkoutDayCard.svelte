<script lang="ts">
	import Heading from '../Heading/Heading.svelte';
	import Icon from '../Icon/Icon.svelte';
	import Card from './Card.svelte';

	export let title: string;
	export let subTitle: string;
	export let href: string;
	export let exerciseCount: number;
</script>

<Card blockLink>
	<Heading {title} {subTitle} size="sm" />

	<a {href}>
		<Icon sprite="arrow-right" />
	</a>

	<p class="mt-2 fs--1">{exerciseCount} exercises</p>
</Card>
