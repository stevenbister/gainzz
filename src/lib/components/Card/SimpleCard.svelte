<script lang="ts">
	import Heading from '../Heading/Heading.svelte';
	import Icon from '../Icon/Icon.svelte';
	import Card from './Card.svelte';

	export let title: string;
	export let href: string;
</script>

<Card blockLink>
	<Heading {title} size="sm" />

	<a {href} slot="action">
		<Icon sprite="arrow-right" />
	</a>
</Card>
