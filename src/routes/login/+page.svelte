<script lang="ts">
	import { enhance } from '$app/forms';
	import Input from '~/src/lib/components/Input/Input.svelte';
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<h1>Login</h1>

<form method="post" use:enhance>
	<Input
		id="email"
		name="email"
		type="email"
		label="Email"
		value={form?.email ?? ''}
		placeholder="user@email.com"
		required
	/>

	<Input id="password" name="password" type="password" label="Password" required />

	<button>Log in</button>

	{#if form?.success === false}<mark>{form?.message}!</mark>{/if}
</form>
