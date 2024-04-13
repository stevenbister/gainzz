<script lang="ts" context="module">
	import { Story, Template } from '@storybook/addon-svelte-csf';
	import type { Meta } from '@storybook/svelte';
	import Alert from './Alert.svelte';

	export const meta = {
		title: 'Alert',
		component: Alert,
		tags: ['autodocs'],
		argTypes: {},
	} satisfies Meta<Alert>;

	const args = {
		heading: 'Oops something went wrong',
		description: 'Please try again later',
	};
</script>

<Template let:args>
	<Alert on:close {...args} />
</Template>

<Story
	name="Primary"
	args={{
		...args,
	}}
/>

<Story
	name="Success"
	args={{
		...args,
		status: 'success',
	}}
/>

<Story
	name="Error"
	args={{
		...args,
		status: 'error',
	}}
/>

<Story
	name="Info"
	args={{
		...args,
		status: 'info',
		'on:close': () => console.log('closed'),
	}}
/>
