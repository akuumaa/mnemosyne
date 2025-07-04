import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config: Config = {
    content: [
        './app/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './content/**/*.{mdx}',
    ],
    theme: {
        extend: {},
    },
    plugins: [typography],
};

export default config;
