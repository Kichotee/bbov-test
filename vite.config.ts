/* eslint-disable import/no-extraneous-dependencies */
import * as path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});
