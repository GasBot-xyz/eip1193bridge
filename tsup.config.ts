import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["index.ts"],
  splitting: false,
  sourcemap: false,
  keepNames: true,
  treeshake: true,
  clean: true,
  silent: true,
  platform: "browser",
  format: ["esm"],
  target: ["esnext"],
  dts: {
    resolve: true,
  },
});
