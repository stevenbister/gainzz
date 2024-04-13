<script lang="ts">
	import LoginForm from '~/src/routes/login/LoginForm.svelte';
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<h1>Login</h1>

<LoginForm {form} />
