import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  format: ["cjs", "esm"],
  banner: { js: '"use client";' },
  dts: true,
  sourcemap: true,
  external: ["react"],
  ...options,
}));
