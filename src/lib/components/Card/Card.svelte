<script lang="ts">
	import { onMount } from 'svelte';
	import type { Align } from '~/types/components';

	export let blockLink: boolean = false;
	export let alignAction: Align = 'self-start';
	export let skeleton: boolean = false;

	let card: HTMLDivElement;

	if (blockLink) {
		onMount(() => {
			const a = card.querySelector('a');
			if (!a) return;

			// Prevent event bubbling when clicking directly on the button element.
			// Without this clicking directly on the button will fire two events
			// which could cause some unintended bugs.
			const handleClick = (e: MouseEvent) => {
				if (e.target !== a) a.click();
			};

			card.addEventListener('click', handleClick);

			return () => card.removeEventListener('click', handleClick);
		});
	}
</script>

<div
	bind:this={card}
	{...$$restProps}
	class:is-skeleton={skeleton}
	class:is-block-link={blockLink}
	class={`card ${$$restProps.class ? $$restProps.class : ''}`}
>
	<slot />

	<div class={`card-action ${alignAction}`}>
		<slot name="action" />
	</div>
</div>

<style lang="scss">
	.card {
		--_card-color-bg: var(--gradient-primary);
		--_card-radius: var(--radius-1);
		--_card-gap-s: var(--space--1);
		--_card-gap-m: var(--space-0);
		--_card-icon-size: var(--fs-2);

		display: grid;
		grid-template-columns: 1fr auto;
		padding: var(--_card-gap-s) var(--_card-gap-m);
		border-radius: var(--_card-radius);
		background: var(--_card-color-bg);

		&.is-block-link {
			cursor: pointer;
		}

		&.is-skeleton {
			position: relative;
			overflow: hidden;

			&::before {
				position: absolute;
				inset: 0;
				background-image: linear-gradient(
					90deg,
					rgba(#fff, 0) 0,
					rgba(#fff, 0.2) 20%,
					rgba(#fff, 0.5) 60%,
					rgba(#fff, 0)
				);
				transform: translateX(-100%);
				animation: shimmer 1s ease-in-out infinite;
				content: '';
			}
		}

		:global(.icon) {
			font-size: var(--_card-icon-size);
		}
	}

	.card-action {
		--_card-action-size: var(--fs-2);

		font-size: var(--_card-action-size);
	}

	@keyframes shimmer {
		100% {
			transform: translateX(100%);
		}
	}
</style>
