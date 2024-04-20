<script lang="ts" context="module">
	import { Story, Template } from '@storybook/addon-svelte-csf';
	import type { Meta } from '@storybook/svelte';
	import Trendline from './Trendline.svelte';

	export const meta = {
		title: 'Trendline',
		component: Trendline,
		tags: ['autodocs'],
		argTypes: {},
	} satisfies Meta<Trendline>;

	const args = {
		dir: 'up',
		diff: 2,
	};
</script>

<Template let:args>
	<Trendline {...args} />
</Template>

<Story
	name="Primary"
	args={{
		...args,
	}}
/>

<Story
	name="Up"
	args={{
		...args,
	}}
/>

<Story
	name="Down"
	args={{
		...args,
		dir: 'down',
		diff: -2,
	}}
/>
