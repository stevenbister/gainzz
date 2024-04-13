<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	/**
	 * Status level of the alert
	 */
	export let status: 'success' | 'error' | 'info' = 'info';
	/**
	 * Heading of the alert
	 */
	export let heading: string;
	/**
	 * Description of the alert
	 */
	export let description: string = '';

	const dispatch = createEventDispatcher();

	function handleClose() {
		dispatch('close');
	}

	const isError = status === 'error';
</script>

<div
	role={isError ? 'alert' : ''}
	aria-live={isError ? null : 'polite'}
	{...$$restProps}
	class={`alert ${status} ${$$restProps.class ? $$restProps.class : ''}`}
>
	<p class="alert-heading">{heading}</p>

	{#if description}
		<p class="alert-description">{description}</p>
	{/if}

	<button class="alert-close" on:click={handleClose}>&times;</button>
</div>

<style lang="scss">
	@layer components {
		.alert {
			--_alert-color-bg: var(--color-info-0-5);
			--_alert-color-border: var(--color-info);
			--_alert-gap: var(--space--2);
			--_alert-radius: var(--radius-1);

			display: grid;
			grid-template-columns: 1fr auto;
			grid-template-rows: auto auto;
			align-items: center;
			padding: var(--_alert-gap);
			border: solid 1px var(--_alert-color-border);
			border-radius: var(--_alert-radius);
			background-color: var(--_alert-color-bg);

			&.info {
				--_alert-color-bg: var(--color-info-0-5);
				--_alert-color-border: var(--color-info);
			}

			&.success {
				--_alert-color-bg: var(--color-success-0-5);
				--_alert-color-border: var(--color-success);
			}

			&.error {
				--_alert-color-bg: var(--color-error-0-5);
				--_alert-color-border: var(--color-error);
			}
		}

		.alert-heading {
			--_alert-heading-fw: var(--fw-7);

			font-weight: var(--_alert-heading-fw);
			grid-column: 1 / 2;
		}

		.alert-description {
			grid-column: 1 / 2;
			grid-row: 2;
		}

		.alert-close {
			--_alert-close-size: var(--fs-1);

			all: unset;
			grid-column: 2;
			display: block;
			align-self: flex-start;
			font-size: var(--_alert-close-size);
			cursor: pointer;
		}
	}
</style>
