<script lang="ts">
	export let address = 'marie@lastovenka.cz';

	$: parts = address.split('@');

	function random_content() {
		return crypto.randomUUID();
	}
</script>

<span>
	{parts[0]}<b class="hidden select-none">{random_content()}</b>@<b class="hidden select-none"
		>{random_content()}</b
	>{parts[1]}
</span>
