import { defineConfig } from 'vitepress'
import { zhConfig } from './configs/zh.mts'
import { enConfig } from './configs/en.mts'

export default defineConfig({
  title: "佳润电火花线切割液",
  description: "佳润官方网站",
  
  // 隐藏 .html 后缀
  cleanUrls: true,
  ignoreDeadLinks: true,
  
  // 多语言配置
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/',
      ...zhConfig
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      ...enConfig
    }
  },
  
  // 主题配置
  themeConfig: {
    logo: '/logo.png',
    
    // 社交链接（可选）
    socialLinks: [
      // { icon: 'github', link: 'https://github.com/yourcompany' }
    ],
    
    // 搜索配置（可选）
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
  },
  
  // 头部配置
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon-96x96.png', size: '96x96' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favico.svg' }],
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#193763' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    ['meta', { id: 'theme-color-meta', name: 'theme-color', content: '#ffffff' }]
  ]
})