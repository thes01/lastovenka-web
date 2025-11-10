export function is_preview_url(url: URL) {
    return url.searchParams.has('preview');
}