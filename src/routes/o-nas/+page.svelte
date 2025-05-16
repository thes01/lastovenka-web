<script>
	import PhotoSlider from '$lib/PhotoSlider.svelte';
	import { zonerama_url, zonerama_urls } from '$lib/zonerama';
</script>

<main class="relative mx-8 max-w-[750px] pt-4 xl:left-[35%] xl:-translate-x-1/2">
	<h1>O nás</h1>

	<h3 class="mt-8">Marie Hrnčiříková</h3>

	<div class="flex flex-col gap-2 sm:flex-row">
		<div class="sm:w-1/2">
			<img src={zonerama_url(523063430)} alt="Marie" />
		</div>
		<p class="text-justify sm:w-1/2">
			Autorka projektu, sbormistrně, zpěvačka a houslistka. Náhodný objev starých rukopisů sběratele
			Jaroslava Smutného změnil její pohled na hudební dědictví. Od té doby se rozhodla obnovit a
			uchovat bohatou hudební historii valašského regionu.
		</p>
	</div>

	<div class="mt-6 flex justify-between">
		<div class="w-1/2">
			<h3>Eva Šerá</h3>
			<p>
				Ilustrátorka a grafička nejen pro projekt Laštověnka. Její malby můžete najít v nejedné
				dětské knížce.
			</p>
		</div>
		<div class="w-1/2 text-right">
			<div class="mb-4">
				<h3>Vojtěch Staša</h3>
				<p>Kamera a střih videoklipů.</p>
			</div>
			<div>
				<h3>Jan Cahel</h3>
				<p>Mix a master CD</p>
			</div>
		</div>
	</div>

	<h3 class="mt-4">Laštověnka band</h3>

	<div class="flex flex-col gap-2 sm:flex-row">
		<p class="sm:w-1/2">
			Marie Hrnčiříková - zpěv, housle<br />
			Vojtěch Hrnčiřík - ak. kytara, zpěv<br />
			Jan Vaněk - el. kytara<br />
			Jan Cahel - baskytara<br />
			Martin Kudela - bicí<br />
			Anežka Hrnčiříková - klávesy, zpěv
		</p>

		<div class="sm:w-1/2">
			<PhotoSlider urls={zonerama_urls([523063424, 523063450, 523063428, 523058019])}></PhotoSlider>
		</div>
	</div>

	<p class="mt-4">
		Dominik Vaněk - zpěv<br />
		Marek Polách - klarinet<br />
		Veronika Mišáková - housle, viola<br />
		Veronika Lišková - housle<br />
		Alžběta Manová - zobcová flétna, příčná flétna<br />
		Kristýna Fojtíková - příčná flétna<br />
		Mira Šerý - trubka<br />
		Karolína Jurčagová - zpěv
	</p>

	<h3 class="mt-6">Dětský sbor Laštověnka</h3>

	<p class="mb-3">Dětský sbor působící ve Štítné nad Vláří pod vedením Marie Hrnčiříkové.</p>

	<PhotoSlider urls={zonerama_urls([476843206, 523060247, 460496545, 476843219])}></PhotoSlider>

	<div class="mt-10 flex justify-between">
		<div>
			<h3 class="">Bára Solařová</h3>
			<p>Foto, web, sociální sítě</p>
		</div>

		<div>
			<h3 class="">Mira Šerý</h3>
			<p>Webové stránky</p>
		</div>
	</div>
</main>
