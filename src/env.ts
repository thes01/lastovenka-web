import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({ SHEET_URL: { static: true } });
