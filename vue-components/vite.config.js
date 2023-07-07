import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({ css: true })],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.js"),
      name: "vuecomp",
      fileName: (format) => `vue-comp.${format}.js`,
    },
  },
  rollupOptions: {
    external: ["vue"],
    output: {
      globals: {
        vue: "Vue",
      },
    },
  },
});
