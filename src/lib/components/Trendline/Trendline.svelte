<script lang="ts">
	import type { Trend } from '~/types/components';
	import Icon from '../Icon/Icon.svelte';

	export let dir: Trend;
	export let diff: number;
</script>

<span {...$$restProps} class={`trendline ${dir} ${$$restProps.class ? $$restProps.class : ''}`}>
	<Icon sprite={`trend-${dir}`} class="trendline-icon" />

	<span class="trendline-diff">{diff}</span>
</span>

<style lang="scss">
	.trendline {
		--_trendline-gap: var(--space--3);
		--_trendline-icon-size: var(--fs-2);
		--_trendline-icon-color-up: var(--color-success);
		--_trendline-icon-color-down: var(--color-error);

		display: flex;
		align-items: center;
		gap: var(--_trendline-gap);

		:global(.trendline-icon) {
			font-size: var(--_trendline-icon-size);
		}

		&.up :global(.trendline-icon) {
			color: var(--_trendline-icon-color-up);
		}

		&.down :global(.trendline-icon) {
			color: var(--_trendline-icon-color-down);
		}
	}

	.trendline-diff {
		font-variant-numeric: tabular-nums;
	}
</style>
