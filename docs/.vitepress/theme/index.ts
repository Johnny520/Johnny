import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import Giscus from './components/Giscus.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('Giscus', Giscus)
  }
} satisfies Theme
