// docs/.vitepress/config.mts

import { defineConfig } from 'vitepress'
import { zhConfig } from './configs/zh.mts'
import { enConfig } from './configs/en.mts'

export default defineConfig({
  title: "佳润",
  description: "佳润官方网站",
  cleanUrls: true,
  
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon-96x96.png', size: '96x96' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favico.svg' }],
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#193763' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    ['meta', { id: 'theme-color-meta', name: 'theme-color', content: '#ffffff' }]
  ],

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
  
  // 全局共享的主题配置
  themeConfig: {
    logo: '/logo.png',
    socialLinks: [
      // { icon: 'github', link: 'https://github.com/yourcompany' }
    ],

    // --- 新增：将 footer 配置移到这里 ---
    footer: {
      message: `
        <div style="display: flex; justify-content: center; align-items: center; gap: 20px;">
          <span style="color: #aaa;">© 佳润线切割液生产厂</span>
          <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33068102000388" style="display: inline-flex; align-items: center; gap: 5px; text-decoration: none; color: #aaa;">
            <img src="/images/beian.png" style="float:left;"/>
            <span>浙公网安备 33068102000388号</span>
          </a>
        </div>
      `
    },
    // --- 新增结束 ---
    
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