<script lang="ts">
	import type { HeadingLevel, Size } from '~/types/components';

	/**
	 * Set the heading level
	 * @default 1
	 */
	export let level: HeadingLevel = 1;
	/**
	 * The text of the heading
	 */
	export let title: string = '';
	/**
	 * The subtitle below the heading
	 */
	export let subTitle: string = '';
	/**
	 * Set the size of the heading
	 */
	export let size: Size = 'md';

	let comp: string = `h${level}`;
</script>

<hgroup>
	<svelte:element
		this={comp}
		{...$$restProps}
		class={`ttl ${size} ${$$restProps.class ? $$restProps.class : ''}`}
	>
		{title}
	</svelte:element>

	{#if subTitle}
		<p class={`subttl ${size}`}>{subTitle}</p>
	{/if}
</hgroup>

<style lang="scss">
	.ttl {
		--_ttl-size: var(--fs-4);

		margin: 0;
		font-size: var(--_ttl-size);

		&.lg {
			--_ttl-size: var(--fs-5);
		}

		&.sm {
			--_ttl-size: var(--fs-1);
		}
	}

	.subttl {
		--_subttl-size: var(--fs-0);
		--_subttl-color: var(--color-dark-1);

		margin: 0;
		color: var(--_subttl-color);
		font-size: var(--_subttl-size);

		&.sm {
			--_subttl-size: var(--fs--1);
		}
	}
</style>
