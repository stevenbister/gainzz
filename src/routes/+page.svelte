<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

{#if data.profile?.first_name}
	<h1>Hello, {data.profile.first_name}!</h1>
{/if}
