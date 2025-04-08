<script lang="ts">
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import type { EmblaCarouselType } from 'embla-carousel';

	interface Props {
		urls: string[];
	}

	let carousel: EmblaCarouselType;

	const { urls }: Props = $props();
</script>

<div
	class="embla"
	use:emblaCarouselSvelte={{ options: { loop: true }, plugins: [] }}
	onemblaInit={(event) => {
		carousel = event.detail;
		console.log(carousel);
	}}
>
	<div class="embla__viewport">
		<div class="embla__container">
			{#each urls as url}
				<img src={url} alt="img" />
			{/each}
		</div>
	</div>
	<button
		class="embla__prev"
		onclick={() => {
			carousel.scrollPrev();
			console.log('prev');
		}}>Prev</button
	>
	<button class="embla__next" onclick={() => carousel.scrollNext()}>Next</button>
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
