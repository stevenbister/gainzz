<script lang="ts">
	/**
	 * The id for the input.
	 */
	export let id: string;
	/**
	 * The label for the input.
	 */
	export let label: string;
	/**
	 * The type of the input.
	 * @default text
	 */
	export let type = 'text';
	/**
	 * The state of the input.
	 */
	export let state: 'default' | 'invalid' = 'default';
	/**
	 * The validation message for the input.
	 */
	export let validationMessage: string = '';
</script>

<div class="input" class:invalid={state === 'invalid'}>
	<label for={id}>{label}</label>
	<input {id} {type} {...$$restProps} />
</div>
{#if validationMessage}
	<div class="validation-message">{validationMessage}</div>
{/if}

<style lang="scss">
	@layer components {
		.input {
			--_input-border: var(--color-dark-1);
			--_input-bg: var(--color-dark-2-5);
			--_input-radius: var(--radius-global);
			--_input-gap: var(--space--2);

			display: flex;
			flex-direction: column;
			gap: var(--_input-gap);
			padding: var(--_input-gap);
			border: solid 1px var(--_input-border);
			border-radius: var(--_input-radius);
			background-color: var(--_input-bg);

			&:has(input:focus-within),
			&:has(input:active) {
				--_input-bg: var(--color-dark-1-5);
			}
		}

		.invalid {
			--_input-border: var(--color-error);
			--_input-bg: var(--color-error-0-5);
		}

		label {
			--_label-color: var(--color-global-text);

			color: var(--_label-color);
		}

		input {
			all: unset;
		}

		.validation-message {
			color: var(--color-error);
			padding-inline: var(--space--2);
			padding-block-start: var(--space--3);
		}
	}
</style>
