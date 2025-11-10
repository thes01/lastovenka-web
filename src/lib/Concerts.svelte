<script lang="ts">
	import { prerendered_sheet_data, query_sheet_data } from './content.remote';
	import { is_preview_url } from './util/url';
	import { page } from '$app/state';

	const concerts_data = is_preview_url(page.url)
		? await query_sheet_data()
		: await prerendered_sheet_data();

	function parse_concerts(data: string) {
		let lines = data.split('\n').slice(1); // remove header
		return lines.map((line) => {
			const [date, location, name] = line.split(',');
			return { date, location, name };
		});
	}

	const concerts = $derived(parse_concerts(concerts_data));
</script>

<ul>
	{#each concerts as concert}
		<li>
			{concert.date}
			{concert.location}
			-
			{concert.name}
		</li>
	{/each}
</ul>
