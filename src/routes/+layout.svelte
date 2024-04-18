<script lang="ts">
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';

	export let data;

	let { supabase, session } = data;
	$: ({ supabase, session } = data);

	// Add root event listener in order to catch supabase events being triggered.
	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				// The usage of invalidate tells SvelteKit that the root +layout.ts load function should
				// be executed whenever the session updates to keep the page store in sync.
				invalidate('supabase:auth');
			}
		});

		return () => data.subscription.unsubscribe();
	});
</script>

<main class="container">
	<slot />
</main>
