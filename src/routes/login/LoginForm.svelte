<script lang="ts">
	import { enhance } from '$app/forms';
	import Alert from '$lib/components/Alert/Alert.svelte';
	import Button from '$lib/components/Button/Button.svelte';
	import Input from '$lib/components/Input/Input.svelte';
	import type { ActionData } from './$types';

	export let form: ActionData;
	let showAlert = false;

	$: {
		if (form?.success === false) {
			showAlert = true;
		}
	}
</script>

<form method="post" use:enhance>
	<Input
		id="email"
		name="email"
		type="email"
		label="Email"
		value={form?.email ?? ''}
		placeholder="user@email.com"
		state={form?.field?.name === 'email' ? 'invalid' : 'default'}
		validationMessage={form?.field?.name === 'email' ? form?.field?.message : ''}
	/>

	<Input
		id="password"
		name="password"
		type="password"
		label="Password"
		state={form?.field?.name === 'password' ? 'invalid' : 'default'}
		validationMessage={form?.field?.name === 'password' ? form?.field?.message : ''}
	/>

	{#if showAlert}
		<Alert
			status="error"
			heading={form?.error ?? 'Unexpected error'}
			description={form?.message}
			on:close={() => (showAlert = false)}
		/>
	{/if}

	<Button>Log in</Button>
</form>

<style lang="scss">
	form {
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
	}
</style>
