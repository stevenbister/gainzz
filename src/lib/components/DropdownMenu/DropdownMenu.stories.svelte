<script lang="ts" context="module">
	import { Story, Template } from '@storybook/addon-svelte-csf';
	import type { Meta } from '@storybook/svelte';
	import Icon from '../Icon/Icon.svelte';
	import DropdownMenu from './DropdownMenu.svelte';
	import DropdownMenuItem from './DropdownMenuItem.svelte';

	export const meta = {
		title: 'DropdownMenu',
		component: DropdownMenu,
		tags: ['autodocs'],
		argTypes: {},
	} satisfies Meta<DropdownMenu>;

	const args = {};
</script>

<Template let:args>
	<DropdownMenu {...args}>
		<DropdownMenuItem on:m-click={() => console.log('Edit')}
			>Edit <Icon sprite="edit" /></DropdownMenuItem
		>
	</DropdownMenu>
</Template>

<Story
	name="Primary"
	args={{
		...args,
	}}
/>
