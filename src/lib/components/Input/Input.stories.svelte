<script lang="ts" context="module">
	import { Story, Template } from '@storybook/addon-svelte-csf';
	import type { Meta } from '@storybook/svelte';
	import Input from './Input.svelte';

	export const meta = {
		title: 'Input',
		component: Input,
		tags: ['autodocs'],
		argTypes: {},
	} satisfies Meta<Input>;

	const args = {
		label: 'Label',
		id: 'input',
		placeholder: 'Placeholder',
	};
</script>

<Template let:args>
	<Input {...args} />
</Template>

<Story name="Primary" args={{ ...args }} />

<Story
	name="Attributes"
	args={{ ...args, label: 'Email', placeholder: 'user@email.com', type: 'email' }}
/>

<Story
	name="Invalid"
	args={{
		...args,
		label: 'Email',
		placeholder: 'user@email.com',
		type: 'email',
		state: 'invalid',
		validationMessage: 'Please enter a valid email address',
	}}
/>
