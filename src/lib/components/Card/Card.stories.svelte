<script lang="ts" context="module">
	import { Story, Template } from '@storybook/addon-svelte-csf';
	import type { Meta } from '@storybook/svelte';
	import Heading from '../Heading/Heading.svelte';
	import Icon from '../Icon/Icon.svelte';
	import Card from './Card.svelte';

	export const meta = {
		title: 'Card',
		component: Card,
		tags: ['autodocs'],
		argTypes: {},
	} satisfies Meta<Card>;

	const args = {};
</script>

<Template let:args>
	<Card {...args}>
		<Heading title="Title" subTitle="Subtitle" />
	</Card>
</Template>

<Story name="Primary" args={{ ...args }} />

<Story name="Action">
	<Card>
		<Heading title="Title" subTitle="Subtitle" />

		<Icon sprite="arrow-right" slot="action" />
	</Card>
</Story>

<Story name="Block Link">
	<Card blockLink alignAction="self-center">
		<Heading title="Title" size="sm" />

		<a href="/" slot="action">
			<Icon sprite="arrow-right" />
		</a>
	</Card>
</Story>

<Story name="Skeleton">
	<Card skeleton />
</Story>
