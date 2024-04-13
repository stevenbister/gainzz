<script lang="ts">
	import LoginForm from '~/src/routes/login/LoginForm.svelte';
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<section class="pt-4">
	<h1 class="fs-5">Login</h1>

	<LoginForm {form} />
</section>

<style lang="scss">
	section {
		display: flex;
		flex-direction: column;
		gap: var(--space-4);
	}
</style>
