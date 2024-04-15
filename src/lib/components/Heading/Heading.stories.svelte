<script lang="ts" context="module">
	import { Story, Template } from '@storybook/addon-svelte-csf';
	import type { Meta } from '@storybook/svelte';
	import Heading from './Heading.svelte';

	export const meta = {
		title: 'Heading',
		component: Heading,
		tags: ['autodocs'],
		argTypes: {},
	} satisfies Meta<Heading>;

	const args = {
		title: 'Title',
		subTitle: 'Subtitle',
	};
</script>

<Template let:args>
	<Heading {...args} />
</Template>

<Story name="Primary" args={{ ...args }} />

<Story name="Large" args={{ ...args, size: 'lg' }} />

<Story name="Small" args={{ ...args, size: 'sm' }} />

<Story name="Heading level 2" args={{ ...args, level: 2 }} />
