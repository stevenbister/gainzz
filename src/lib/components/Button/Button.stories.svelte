<script lang="ts" context="module">
	import { Story, Template } from '@storybook/addon-svelte-csf';
	import type { Meta } from '@storybook/svelte';
	import Button from './Button.svelte';

	export const meta = {
		title: 'Button',
		component: Button,
		tags: ['autodocs'],
		argTypes: {},
	} satisfies Meta<Button>;
</script>

<Template let:args>
	<!--👇 'on:click' allows to forward event to addon-actions  -->
	<Button {...args} on:click>Button</Button>
</Template>

<Story name="Primary" />

<Story name="Ghost" args={{ variant: 'ghost' }} />

<Story name="Status" args={{ status: 'success' }} />

<Story name="Disabled" args={{ disabled: true }} />

<Story name="Link">
	<Button
		as="a"
		href="https://example.com"
		on:click={() => {
			console.log('Link clicked');
		}}>Link</Button
	>
</Story>
