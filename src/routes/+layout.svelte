<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@300&family=Niramit:ital,wght@0,300;0,400;1,400&display=swap"
		rel="stylesheet"
	/>
	<link rel="icon" type="image/x-icon" href="/favicon.png" />

	<meta property="og:image" content="/social.jpg" />
	<meta property="og:image:type" content="image/jpg" />
	<meta property="og:image:width" content="879" />
	<meta property="og:image:height" content="602" />
</svelte:head>

<div class="relative w-screen overflow-hidden pt-2">
	{@render children()}
</div>
