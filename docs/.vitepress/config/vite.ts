import { UserConfig } from "vitepress";
import Components from 'unplugin-vue-components/vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import { MarkdownTransform } from '../plugins/markdown-transforms'
import path, { resolve } from 'path'
type ViteConfig = Required<UserConfig>['vite']

export const viteConfig:ViteConfig = {
  base:'/whale-ui/',
  css:{
      preprocessorOptions:{
        scss:{
          api: 'modern-compiler', // 或 'modern'
          silenceDeprecations: ['legacy-js-api'] // 可选，临时静默警告
        }
      }
    },
  plugins:[
    Components({
      dirs:[path.resolve(__dirname,'../vitepress/components')]
    }),
    MarkdownTransform(),
    createSvgIconsPlugin({
      iconDirs:[path.resolve(__dirname,"../vitepress/assets/icons")],
      symbolId:'icon-[name]'
    }) as any
  ],
  resolve: {
    alias: {
      "whale-ui": resolve(__dirname, "../../../packages/whale-ui"),
      "@whale-ui": resolve(__dirname, "../../../packages"),
    },
  },
}