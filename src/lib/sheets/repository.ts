import { SHEET_URL } from '$env/static/private';

export const sheet_repository = {
    get_sheet_data,
}

async function get_sheet_data() {
    const response = await fetch(SHEET_URL);
    const data = await response.text();
    return data;
}