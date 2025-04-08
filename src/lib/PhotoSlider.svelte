<script lang="ts">
	import { TinySlider } from 'svelte-tiny-slider';

	interface Props {
		items: string[];
	}

	const { items }: Props = $props();
</script>

<TinySlider>
	{#each items as item}
		<img src={item} alt="" />
	{/each}
</TinySlider>
