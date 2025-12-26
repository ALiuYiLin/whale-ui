import { UserConfig } from "vitepress";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import { MarkdownTransform } from "../plugins/markdown-transforms";
import path, { resolve } from "path";
import tailwindcss from '@tailwindcss/vite'


type ViteConfig = Required<UserConfig>["vite"];

export const viteConfig: ViteConfig = {
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
        silenceDeprecations: ["legacy-js-api"],
      },
    },
  },
  plugins: [
    tailwindcss(),
    MarkdownTransform(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(__dirname, "../vitepress/assets/icons")],
      symbolId: "icon-[name]",
    }),
  ],
  resolve: {
    alias: {
      "whale-ui": resolve(__dirname, "../../../packages"),
      "@whale-ui": resolve(__dirname, "../../../packages"),
    },
  },
};
