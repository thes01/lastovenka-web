<script lang="ts">
	// @ts-ignore
	import Concerts from '$lib/content/concerts.md';
	import Email from '$lib/Email.svelte';
	import PhotoSlider from '$lib/PhotoSlider.svelte';
	import { get_title_photos, zonerama_urls } from '$lib/zonerama';
</script>

<img
	src="/swallows.webp"
	alt="Vlastovky"
	class="absolute top-10 right-0 -z-1 w-1/3 translate-x-1/3 lg:top-40 lg:right-0 lg:translate-x-0"
/>

<img
	src="/swallow_1.webp"
	alt="Vlastovka"
	class="absolute top-32 left-6 -z-1 w-20 lg:top-20 lg:left-0 lg:w-40 xl:left-6"
/>

<h1 class="text-sky mt-14 mb-32 w-full text-center text-[4rem] sm:text-[6rem] lg:text-[9rem]">
	Laštověnka
</h1>

<main class="relative mx-8 max-w-[550px] lg:left-[30%] lg:-translate-x-1/2">
	<h3>Hudební uskupení, které obnovuje písně z&nbsp;Valašska</h3>
	<p>Již zapomenutá tvorba v novém moderním pojetí tradičních i současných hudebních nástrojů.</p>
	<p class="text-grass">Komplexní pojetí záznamu - od notového, přes zvukový až po videozáznam.</p>
	<div class="mb-10"></div>

	<h2 class="text-flower">Kde si nás můžete poslechnout</h2>
	<div class="concerts">
		<Concerts />
	</div>

	<div class="mb-10"></div>

	<iframe
		class="h-60 w-full"
		src="https://www.youtube.com/embed/eEA-UzLimJY?si=LoDGzBg1YbvNCRYf"
		title="Videoklip Laštověnka - Vesele"
		frameborder="0"
		allow="encrypted-media; picture-in-picture; web-share"
		referrerpolicy="strict-origin-when-cross-origin"
		allowfullscreen
	></iframe>

	<h2 class="mt-10">Přijedeme k vám!</h2>
	<p>Rádi přijedeme a živě vystoupíme v plné nebo částečné sestavě.</p>
	<p class="text-grass">Vše po domluvě na <Email /></p>

	<div class="mt-10">
		<PhotoSlider urls={zonerama_urls(get_title_photos())} />
	</div>
</main>
