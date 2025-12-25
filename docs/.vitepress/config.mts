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
            { text: "快速开始", link: "/guide/quick-start" },
            { text: "字体设计", link: "/guide/font" },
            { text: "布局设计", link: "/guide/layout" }
          ],
        },
      ],
      "/components/": [
        {
          text: "组件",
          items: [
            { text: "按钮", link: "/components/button" },
            { text: "分割线", link: "/components/divider" }
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
