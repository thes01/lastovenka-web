<script lang="ts">
	import emblaCarouselSvelte from 'embla-carousel-svelte';

	interface Props {
		urls: string[];
	}

	const { urls }: Props = $props();
</script>

<div class="embla" use:emblaCarouselSvelte={{ options: { loop: true }, plugins: [] }}>
	<div class="embla__container">
		{#each urls as url}
			<img src={url} alt="img" />
		{/each}
	</div>
</div>

<style>
	.embla {
		overflow: hidden;
	}
	.embla__container {
		display: flex;
	}
	.embla__slide {
		flex: 0 0 100%;
		min-width: 0;
	}
</style>
