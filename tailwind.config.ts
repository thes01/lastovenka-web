import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors: {
        'sky': '#285a81',
        'grass': '#3a3715',
        'flower': '#d06644',
      }
    }
  },

  plugins: []
} satisfies Config;
