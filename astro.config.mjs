import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

import image from "@astrojs/image";

import astroI18next from "astro-i18next";

export default defineConfig({
    site: 'https://katsuragawaa.github.io',
    integrations: [astroI18next(), tailwind(), image({ serviceEntryPoint: '@astrojs/image/sharp' })]
});