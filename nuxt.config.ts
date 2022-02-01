import type { NuxtConfig } from "@nuxt/types";

const config: NuxtConfig = {
  env: {},
  head: {
    title: "Sellmore filters",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [],
  },
  modules: [],
  plugins: [],
  css: ["@/assets/app.scss", "normalize.css/normalize.css"],
  build: {},
  buildModules: ["@nuxt/typescript-build"],
};

export default config;
