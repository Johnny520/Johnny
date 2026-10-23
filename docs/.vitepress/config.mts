import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '文强哥 · Johnny520',
  description: 'Android 个人开发者 —— LSPosed 模块、隐私防护、微信增强、APK 逆向分析',

  // 站点部署在 https://johnny520.github.io/Johnny/ ，必须设置 base
  base: '/Johnny/',

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/Johnny/assets/images/devil.png' }],
    ['meta', { name: 'theme-color', content: '#6366f1' }],
    ['meta', { property: 'og:title', content: '文强哥 · Johnny520' }],
    ['meta', { property: 'og:description', content: 'Android 个人开发者 —— LSPosed 模块、隐私防护、微信增强、APK 逆向分析' }],
    ['meta', { property: 'og:image', content: 'https://johnny520.github.io/Johnny/assets/images/devil.png' }]
  ],

  themeConfig: {
    logo: '/assets/images/devil.png',
    siteTitle: '文强哥 · Johnny520',

    nav: [
      { text: '首页', link: '/' },
      { text: '关于', link: '/about' },
      { text: '项目', link: '/projects/' },
      { text: '友链', link: '/friend' },
      { text: '讨论', link: '/discuss' },
      { text: '❤️ 支持作者', link: 'https://afdian.com/a/Johnny520' },
      {
        text: '更多',
        items: [
          { text: '💗 爱发电赞助', link: 'https://afdian.com/a/Johnny520' },
          { text: '🐙 GitHub', link: 'https://github.com/Johnny520' },
          { text: '📦 我的所有仓库', link: 'https://github.com/Johnny520?tab=repositories' },
          { text: '📢 TG 群组', link: 'https://t.me/wcx12138' },
          { text: '⏪ 经典版主页', link: '/legacy/index.html' }
        ]
      }
    ],

    sidebar: {
      '/projects/': [
        {
          text: '开源项目',
          items: [
            { text: '全部项目', link: '/projects/' },
            { text: '💬 WCX · 微信增强模块', link: '/projects/wcx' },
            { text: '🛡️ Anti-Detect · 反检测模块', link: '/projects/anti-detect' },
            { text: '🚫 JohnnyAdBlock · 去广告模块', link: '/projects/johnnyadblock' },
            { text: '🧹 分区清理大师', link: '/projects/partition-cleaner' },
            { text: '🔬 APK Analyzer · 逆向分析', link: '/projects/apk-analyzer' },
            { text: '🏢 企信查 · 企业信息查询', link: '/projects/qixincha' },
            { text: '🎨 WeKit 主题生成器', link: '/projects/wekit-theme-generator' },
            { text: '🌐 本站源码', link: '/projects/johnny-site' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Johnny520' }
    ],

    footer: {
      message: '工具应当私密、可靠、属于用户自己。',
      copyright: '© 2026 文强哥 (Johnny520) · 版权所有'
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' }
          }
        }
      }
    },

    outline: { level: [2, 3], label: '本页目录' },
    docFooter: { prev: '上一篇', next: '下一篇' },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: { dateStyle: 'short', timeStyle: 'short' }
    },
    darkModeSwitchLabel: '外观',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',
    externalLinkIcon: true
  }
})
