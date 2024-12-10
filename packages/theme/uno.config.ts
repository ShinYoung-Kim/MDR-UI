import { defineConfig, presetUno } from "unocss";

export default defineConfig({
  content: {
    filesystem: ["./../**/*.{html,js,ts,jsx,tsx,vue,svelte,astro}"],
  },
  presets: [presetUno()],
  shortcuts: {
    "glass-xs":
      "bg-gray-400 bg-opacity-75 rounded-md p-4 text-white mix-blend-hard-light backdrop-opacity-70 backdrop-blur-md backdrop-saturate-150 shadow-lg border-1 border-white",
    "glass-sm":
      "bg-gray-500 bg-opacity-75 rounded-md p-4 text-white mix-blend-hard-light backdrop-opacity-70 backdrop-blur-md backdrop-saturate-150 shadow-lg border-1 border-white",
    "glass-md":
      "bg-gray-600 bg-opacity-75 rounded-md p-4 text-white mix-blend-hard-light backdrop-opacity-70 backdrop-blur-md backdrop-saturate-150 shadow-lg border-1 border-white",
    "glass-lg":
      "bg-gray-700 bg-opacity-75 rounded-md p-4 text-white mix-blend-hard-light backdrop-opacity-70 backdrop-blur-md backdrop-saturate-150 shadow-lg border-1 border-white",
    "glass-xl":
      "bg-gray-800 bg-opacity-75 rounded-md p-4 text-white mix-blend-hard-light backdrop-opacity-70 backdrop-blur-md backdrop-saturate-150 shadow-lg border-1 border-white",
    "glass-2xl":
      "bg-gray-900 bg-opacity-75 rounded-md p-4 text-white mix-blend-hard-light backdrop-opacity-70 backdrop-blur-md backdrop-saturate-150 shadow-lg border-1 border-white",
  },
});
