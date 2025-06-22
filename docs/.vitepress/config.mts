import { defineConfig } from 'vitepress'
import { viteConfig } from './config/vite'
import { mdPlugin } from "./plugins";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "whale-ui",
  description: "A vue3 components lib",
  srcDir:'src',
  vite:viteConfig,
  markdown:{config:(md)=>mdPlugin(md)},
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "指南", link: "/guide/design" },
      { text: "组件", link: "/components/button" },
    ],
    footer:{
      message:"联系邮箱: scliuyilin@163.com",
      copyright:"Copyright © 2025 备案号：<a id='beian' href='https://beian.miit.gov.cn/' target='_blank'>蜀ICP备2025123858号-1</a>"
    },
    sidebar: {     
      "/guide/": [
        {
          text: "指南",
          items: [
            { text: "设计", link: "/guide/design" },
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
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
