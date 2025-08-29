import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-Hans',
  base: '/demo/',
  title: "科学指南",
  description: "",
  head: [
    ['link', { rel: 'icon', href: '/demo/favicon.ico' }],
    ['link', { rel: 'apple-touch-icon', href: '/demo/apple-touch-icon.png' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/demo/logo.svg' }]
  ],
  cleanUrls: true,
  ignoreDeadLinks: true,

  themeConfig: {
    logo: '/logo-mini.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '配置教程', link: '/guide' },
      { text: '软件下载', link: '/download' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'qq', link: 'https://qm.qq.com/q/EB9FBNhOjS' },
      { icon: 'github', link: 'https://github.com/henryard/henryard' }
    ],

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '浅色外观',
    darkModeSwitchTitle: '深色外观',
    skipToContentLabel: '跳转到内容',

    outline: {
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'long'
      }
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    }
  }
})
