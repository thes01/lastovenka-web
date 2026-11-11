export const NETLIFY_SIZE = {
	small: '&w=640x&h=427',
	medium: '&w=1024x&h=683',
	large: '&w=1296x&h=864'
};

export type NetlifySize = keyof typeof NETLIFY_SIZE;

export function netlify_url(photo_id: string | number, size: NetlifySize = 'small') {
	const size_str = NETLIFY_SIZE[size];
	return `https://lastovenka.cz/.netlify/images?url=/${photo_id}.jpg${size_str}`;
}

export function netlify_urls(photo_ids: (string | number)[], size: NetlifySize = 'small') {
	return photo_ids.map((photo_id) => netlify_url(photo_id, size));
}

export const photos = {
	band: [523063424, 523063450, 523063428, 523058019],
	choir: [476843206, 523060247, 460496545, 476843219],
	marie: [495085307]

} satisfies Record<string, number[]>;

export function get_title_photos(): number[] {
	return [
		photos.choir[0],
		...random_shuffle([...photos.choir.slice(1, 3), ...photos.band.slice(0, 2)])
	];
}

export function random_shuffle<T>(arr: T[]): T[] {
	for (let i = arr.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}
	return arr;
}
