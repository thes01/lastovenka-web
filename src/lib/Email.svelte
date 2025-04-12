<script lang="ts">
	interface Props {
		address?: string;
	}
	const { address = 'marie@lastovenka.cz' }: Props = $props();

	const parts = $derived(address.split('@'));
</script>

<span>
	{parts[0]}<b class="hidden select-none">{crypto.randomUUID()}</b>@<b class="hidden select-none"
		>{crypto.randomUUID()}</b
	>{parts[1]}
</span>
