export const ZONERAMA_SIZE = {
    'small': '640x427',
    'medium': '1024x683',
    'large': '1296x864',
}

export type ZoneramaSize = keyof typeof ZONERAMA_SIZE;

export function zonerama_url(photo_id: string | number, size: ZoneramaSize = 'small') {
    const size_str = ZONERAMA_SIZE[size];
    return `https://eu.zonerama.com/photos/${photo_id}_${size_str}.jpg`;
}

export function zonerama_urls(photo_ids: (string | number)[], size: ZoneramaSize = 'small') {
    return photo_ids.map((photo_id) => zonerama_url(photo_id, size));
}

export const photos = {
    band: [
        523063424, 523063450, 523063428, 523058019
    ],
    choir: [
        476843206, 523060247, 460496545, 476843219
    ],
    marie: [
        495085307
    ]
} satisfies Record<string, number[]>;

export function get_title_photos(): number[] {
    return [
        photos.choir[0],
        ...random_shuffle([...photos.choir.slice(1, 3), ...photos.band.slice(0, 2)]),
    ]
}

export function random_shuffle<T>(arr: T[]): T[] {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}