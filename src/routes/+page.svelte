<script lang="ts">
	// @ts-ignore
	import Concerts from '$lib/content/concerts.md';
	// @ts-ignore
	import Donio from '$lib/content/donio.md';
	import Email from '$lib/Email.svelte';
	import Fb from '$lib/icon/Fb.svelte';
	import Instagram from '$lib/icon/Instagram.svelte';
</script>

<img
	src="/swallows.webp"
	alt="Vlastovky"
	class="-z-1 absolute right-0 top-10 w-1/3 translate-x-1/3 lg:right-0 lg:top-40 lg:translate-x-0"
/>

<img
	src="/swallow_1.webp"
	alt="Vlastovka"
	class="-z-1 absolute left-6 top-32 w-20 lg:left-0 lg:top-20 lg:w-40 xl:left-6"
/>

<!-- <div class="text-md hidden justify-end">
	<a href="/o-nas" class="px-3">O nás</a>
	<a href="/e-shop" class="px-3">E-shop</a>
	<a href="/kontakty" class="px-3">Kontakty</a>
</div> -->

<h1 class="mb-32 mt-14 w-full text-center text-[4rem] sm:text-[6rem] lg:text-[9rem]">Laštověnka</h1>

<div class="relative px-8">
	<div class="relative max-w-[550px] lg:left-[30%] lg:-translate-x-1/2">
		<h3>Hudební uskupení, které obnovuje písně z Valašska</h3>
		<p>Již zapomenutá tvorba v novém moderním pojetí tradičních i současných hudebních nástrojů.</p>
		<p class="text-grass">
			Komplexní pojetí záznamu - od notového, přes zvukový až po videozáznam.
		</p>
		<div class="mb-10"></div>

		<h2 class="text-flower">Kde si nás můžete poslechnout</h2>
		<Concerts />

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

		<h3 class="mt-10">Podpořte nás na <a href="https://donio.cz/podporlastovenku">Donio.cz</a></h3>
		<Donio />

		<h2 class="mt-10">Přijedeme k vám!</h2>
		<p>Rádi přijedeme a živě vystoupíme v plné nebo částečné sestavě.</p>
		<p class="text-grass">Vše po domluvě na <Email /></p>
	</div>
</div>

<!-- footer hello -->

<div class="relative mt-40">
	<img
		src="meadow_bottom.webp"
		class="absolute bottom-0 right-0 -z-10 w-full min-w-[1800px]"
		alt="louka"
	/>

	<div class="px-10 pb-4 pt-20 lg:px-20">
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
</div>
