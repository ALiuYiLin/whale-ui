import { UserConfig } from "vitepress";
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import { MarkdownTransform } from '../plugins/markdown-transforms'
import path, { resolve } from 'path'

type ViteConfig = Required<UserConfig>['vite']

export const viteConfig:ViteConfig = {
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: `@use "@whale-ui/styles/index.scss" as *;`,
        api: 'modern-compiler',
        silenceDeprecations: ['legacy-js-api'],
      },
    },
  },
  plugins:[
    MarkdownTransform(),
    createSvgIconsPlugin({
      iconDirs:[path.resolve(__dirname,"../vitepress/assets/icons")],
      symbolId:'icon-[name]'
    })
  ],
  resolve: {
    alias: {
      "whale-ui": resolve(__dirname, "../../../packages"),
      "@whale-ui": resolve(__dirname, "../../../packages"),
    },
  },
}