<div {...$$restProps} class={`card-list ${$$restProps.class ? $$restProps.class : ''}`}>
	<slot />
</div>

<style lang="scss">
	.card-list {
		--_card-list-gap: var(--space-1);

		display: flex;
		flex-direction: column;
		gap: var(--_card-list-gap);
	}
</style>
