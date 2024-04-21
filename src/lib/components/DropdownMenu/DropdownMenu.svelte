<script lang="ts">
	import { createDropdownMenu, melt } from '@melt-ui/svelte';
	import Icon from '../Icon/Icon.svelte';
	const {
		elements: { menu, trigger, overlay },
	} = createDropdownMenu();
</script>

<button type="button" class="dropdown-trigger" use:melt={$trigger}><Icon sprite="menu" /></button>

<div use:melt={$overlay} />

<div class="dropdown-menu" use:melt={$menu} {...$$restProps}>
	<slot />
</div>

<style lang="scss">
	.dropdown-menu {
		--_dropdown-menu-color-bg: var(--color-dark-3);
		--_dropdown-menu-color-fg: var(--color-light);
		--_dropdown-menu-radius: var(--radius-1);

		color: var(--_dropdown-menu-color-fg);
		background-color: var(--_dropdown-menu-color-bg);
		border-radius: var(--_dropdown-menu-radius);
	}

	.dropdown-trigger {
		--_dropdown-trigger-gap: var(--space--3);

		all: unset;
		padding: var(--_dropdown-trigger-gap);
		cursor: pointer;

		&:focus-visible {
			outline: 2px solid var(--color-info);
			outline-offset: 2px;
		}
	}
</style>
