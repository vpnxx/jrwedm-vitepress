// docs/.vitepress/config.mts

import { defineConfig } from 'vitepress'
import { zhConfig } from './configs/zh.mts'
import { enConfig } from './configs/en.mts'

export default defineConfig({
  // 这是全局的基础配置
  title: "佳润",
  description: "佳润官方网站",
  cleanUrls: true,
  
  // 头部配置等保持不变
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon-96x96.png', size: '96x96' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favico.svg' }],
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#193763' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    ['meta', { id: 'theme-color-meta', name: 'theme-color', content: '#ffffff' }]
  ],

  // 多语言配置
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/', // 关键：告诉VitePress根URL是什么
      ...zhConfig // 现在这里展开的是一个纯粹的对象
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/', // 关键：告诉VitePress英文版的URL前缀
      ...enConfig // 这里也是
    }
  },
  
  // 全局共享的主题配置
  themeConfig: {
    logo: '/logo.png',
    socialLinks: [
      // { icon: 'github', link: 'https://github.com/yourcompany' }
    ],
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索',
                buttonAriaLabel: '搜索'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    }
  }
})