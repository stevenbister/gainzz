<script lang="ts">
	/**
	 * The name of the sprite to use.
	 */
	export let sprite: string = '';
</script>

<svg {...$$restProps} class={`icon ${$$restProps.class ? $$restProps.class : ''}`}>
	<use href={`/spritesheet.svg#${sprite}`} />
</svg>

<style lang="scss">
	.icon {
		width: 1em;
		height: 1em;
	}
</style>
