<script lang="ts">
	import type { SvelteComponent } from 'svelte';

	/**
	 * Button type, pass a string or a Svelte component
	 * @example <Button as="a" href="https://example.com">Link</Button>
	 */
	export let as: typeof SvelteComponent | string = 'button';
	/**
	 * Button variant
	 */
	export let variant: '' | 'ghost' = '';
	/**
	 * Button status
	 */
	export let status: '' | 'success' | 'danger' = '';
</script>

{#if typeof as === 'string'}
	<svelte:element
		this={as}
		{...$$restProps}
		class={`btn ${variant} ${status} ${$$restProps.class ? $$restProps.class : ''}`}
	>
		<slot />
	</svelte:element>
{:else}
	<svelte:component
		this={as}
		{...$$restProps}
		class={`btn ${variant} ${status} ${$$restProps.class ? $$restProps.class : ''}`}
	>
		<slot />
	</svelte:component>
{/if}

<style lang="scss">
	@layer components {
		.btn {
			--_btn-color-bg: var(--color-dark-2);
			--_btn-color-fg: var(--color-light-1);
			--_btn-gap-s: var(--space--2);
			--_btn-gap-m: var(--space-2);
			--_btn-radius: var(--radius-1);
			--_btn-ease: 0.2s ease-in-out;

			all: unset;
			display: inline-flex;
			align-items: center;
			justify-content: center;
			gap: var(--_btn-gap-s);
			padding: var(--_btn-gap-s) var(--_btn-gap-m);
			border-radius: var(--_btn-radius);
			background-color: var(--_btn-color-bg);
			color: var(--_btn-color-fg);
			transition:
				background-color var(--_btn-ease),
				color var(--_btn-ease);
			cursor: pointer;

			&:focus-visible {
				outline: 2px solid var(--color-info);
				outline-offset: 2px;
			}

			&:hover,
			&:active {
				--_btn-color-bg: var(--color-dark-1);
			}

			&[disabled] {
				opacity: 0.75;
				pointer-events: none;
			}

			&.success {
				&:not(.ghost) {
					--_btn-color-bg: var(--color-success-0-5);

					&:hover,
					&:active {
						--_btn-color-bg: var(--color-success);
					}
				}
			}

			&.danger {
				&:not(.ghost) {
					--_btn-color-bg: var(--color-error-0-5);

					&:hover,
					&:active {
						--_btn-color-bg: var(--color-error);
					}
				}
			}

			&.ghost {
				--_btn-color-bg: transparent;
				--_btn-color-fg: var(--color-light-1);
				--_btn-radius: var(--radius-2);

				border: 1px solid currentColor;

				&:hover,
				&:active {
					--_btn-color-bg: var(--color-light-1);
					--_btn-color-fg: var(--color-dark-2);
				}
			}
		}
	}
</style>
