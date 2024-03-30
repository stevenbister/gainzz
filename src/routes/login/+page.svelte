<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<h1>Login</h1>

<form method="post" use:enhance>
	<label
		>email
		<input name="email" value={form?.email ?? ''} required />
	</label>
	<label
		>password
		<input type="password" name="password" required />
	</label>

	<button>Log in</button>

	{#if form?.success === false}<mark>{form?.message}!</mark>{/if}
</form>
