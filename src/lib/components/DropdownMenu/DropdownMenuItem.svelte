<script lang="ts">
	import { createDropdownMenu, melt } from '@melt-ui/svelte';
	const {
		elements: { item },
	} = createDropdownMenu();
</script>

<div class="dropdown-menu-item" use:melt={$item} on:m-click {...$$restProps}>
	<slot />
</div>

<style lang="scss">
	.dropdown-menu-item {
		--_dropdown-menu-item-gap-xs: var(--space--3);
		--_dropdown-menu-item-gap-s: var(--space--2);
		--_dropdown-menu-item-gap-m: var(--space-1);

		display: flex;
		align-items: center;
		gap: var(--_dropdown-menu-item-gap-s);
		padding: var(--_dropdown-menu-item-gap-xs) var(--_dropdown-menu-item-gap-m);
		cursor: pointer;
	}
</style>
