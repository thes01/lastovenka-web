export function zonerama_url(photo_id: string | number, size_str: string = '1296x864') {
    return `https://eu.zonerama.com/photos/${photo_id}_${size_str}.jpg`;
}

export function zonerama_urls(photo_ids: (string | number)[], size_str: string = '1296x864') {
    return photo_ids.map((photo_id) => zonerama_url(photo_id, size_str));
}