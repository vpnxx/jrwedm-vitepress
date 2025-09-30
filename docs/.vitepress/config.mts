// docs/.vitepress/config.mts
import { defineConfig } from 'vitepress'
// 分别导入中英文的各个部分
import { title as zhTitle, description as zhDescription, themeConfig as zhThemeConfig } from './configs/zh.mts'
import { title as enTitle, description as enDescription, themeConfig as enThemeConfig } from './configs/en.mts'

// 1. 创建一个包含所有共享配置的常量
const sharedThemeConfig = {
  logo: '/logo.png',
  socialLinks: [
    // { icon: 'github', link: 'https://github.com/yourcompany' }
  ],
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
  search: {
    provider: 'local',
    options: {
      locales: {
        root: {
          translations: {
            button: { buttonText: '搜索', buttonAriaLabel: '搜索' },
            modal: {
              noResultsText: '无法找到相关结果',
              resetButtonTitle: '清除查询条件',
              footer: { selectText: '选择', navigateText: '切换' }
            }
          }
        }
      }
    }
  }
}

// 2. 在 defineConfig 中进行最终的配置组装
export default defineConfig({
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
      // 为中文版提供完整的配置
      title: zhTitle,
      description: zhDescription,
      themeConfig: {
        ...sharedThemeConfig, // 先展开共享配置
        ...zhThemeConfig      // 再展开中文特有配置，这样可以覆盖（如果需要的话）
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      // 为英文版提供完整的配置
      title: enTitle,
      description: enDescription,
      themeConfig: {
        ...sharedThemeConfig, // 先展开共享配置
        ...enThemeConfig      // 再展开英文特有配置
      }
    }
  }
})