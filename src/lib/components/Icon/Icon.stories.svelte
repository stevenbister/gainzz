<script lang="ts" context="module">
	import { Story, Template } from '@storybook/addon-svelte-csf';
	import type { Meta } from '@storybook/svelte';
	import Icon from './Icon.svelte';

	export const meta = {
		title: 'Icon',
		component: Icon,
		tags: ['autodocs'],
		argTypes: {},
	} satisfies Meta<Icon>;

	const args = {
		sprite: 'arrow-right',
	};
</script>

<Template let:args>
	<Icon {...args} />
</Template>

<Story name="Primary" args={{ ...args }} />
