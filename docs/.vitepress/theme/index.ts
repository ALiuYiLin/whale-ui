// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
console.log('DefaultTheme: ', DefaultTheme);
import type { Theme } from 'vitepress'
import 'whale-ui/theme/index.scss'
import './style.css'
// import '@whale-ui/theme/src/index.scss'
import VpDemo from '../vitepress/components/vp-demo.vue'
import 'virtual:svg-icons-register';
import './index.css'


export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
    app.component('Demo',VpDemo)
  }
} satisfies Theme
