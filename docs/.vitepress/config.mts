import { defineConfig } from 'vitepress'
import { viteConfig } from './config/vite'
import { mdPlugin } from "./plugins";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "whale-ui",
  description: "一个基于vue3的组件库",
  srcDir:'src',
  vite:viteConfig,
  base:'/whale-ui/',
  markdown:{config:(md)=>mdPlugin(md)},
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "指南", link: "/guide/design" },
      { text: "组件", link: "/components/button" },
    ],
    footer:{
      message:"联系邮箱: scliuyilin@163.com",
    },
    sidebar: {     
      "/guide/": [
        {
          text: "指南",
          items: [
            { text: "快速开始", link: "/guide/quick-start" }
          ],
        },
      ],
      "/components/": [
        {
          text: "组件",
          items: [
            { text: "按钮", link: "/components/button" },
            { text: "色彩", link: "/components/color" },
            { text: "边框", link: "/components/border" },
            { text: "布局", link: "/components/layout" },
          ]
        }
      ],
    },
    outline: {
      label: '页面导航'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ALiuYiLin/whale-ui' }
    ]
  }
})
