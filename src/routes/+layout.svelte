<script lang="ts">
	import Email from '$lib/Email.svelte';
	import Fb from '$lib/icon/Fb.svelte';
	import Instagram from '$lib/icon/Instagram.svelte';
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

	<meta name="theme-color" content="#285a81" />
</svelte:head>

<div class="relative w-screen overflow-hidden pt-2">
	{@render children()}

	<footer class="relative mt-80 sm:mt-40">
		<img
			src="meadow_bottom.webp"
			class="absolute right-0 bottom-0 -z-10 w-full min-w-[1800px] select-none"
			alt="louka"
		/>

		<div class="px-10 pt-20 pb-4 lg:px-20">
			<h2 class="text-white">Kontakty</h2>
			<ul class="text-white">
				<li><Email /></li>
				<li>
					<a href="https://www.instagram.com/lastovenka/"
						><Instagram cls="w-4 inline-flex mr-1 invert" />lastovenka</a
					>
				</li>
				<li>
					<a href="https://www.facebook.com/people/Laštověnka"
						><Fb cls="w-4 inline-flex mr-1 invert" />Laštověnka</a
					>
				</li>
			</ul>
		</div>
	</footer>
</div>
