<script lang="ts">
	import Heading from '$lib/components/Heading/Heading.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Heading title={`Week: ${data.id}`} />
