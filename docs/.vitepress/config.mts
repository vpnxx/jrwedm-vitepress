// docs/.vitepress/config.mts

import { defineConfig, type DefaultTheme } from 'vitepress'
// 分别导入中英文的各个部分
import { title as zhTitle, description as zhDescription, themeConfig as zhThemeConfig } from './configs/zh.mts'
import { title as enTitle, description as enDescription, themeConfig as enThemeConfig } from './configs/en.mts'

// 创建一个包含所有“共享”配置的常量
const sharedThemeConfig: DefaultTheme.Config = {
  logo: '/logo.png',
  
  socialLinks: [
    // { icon: 'github', link: 'https://github.com/yourcompany' }
  ],
  
  footer: {
    message: `
      <div style="display: flex; justify-content: center; align-items: center; gap: 20px; flex-wrap: wrap; padding: 0 20px;">
        <span style="color: var(--vp-c-text-2);">© 佳润线切割液生产厂</span>
        <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33068102000388" style="display: inline-flex; align-items: center; gap: 5px; text-decoration: none; color: var(--vp-c-text-2);">
          <img src="/images/beian.png" style="height:18px;"/>
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

// 在 defineConfig 中进行最终的配置组装
export default defineConfig({
  cleanUrls: true,
  
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    // 您可以根据需要添加其他 head 配置
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
        ...zhThemeConfig      // 再展开中文特有配置
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