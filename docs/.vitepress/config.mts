import { defineConfig } from 'vitepress'
import { title as zhTitle, description as zhDescription, themeConfig as zhThemeConfig } from './configs/zh.mts'
import { title as enTitle, description as enDescription, themeConfig as enThemeConfig } from './configs/en.mts'

const sharedThemeConfig = {
  logo: '/logo.png',
  socialLinks: [],
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
  search: { /* ... */ }
}

export default defineConfig({
  cleanUrls: true,
  head: [/* ... */],
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/',
      title: zhTitle,
      description: zhDescription,
      themeConfig: {
        ...sharedThemeConfig,
        ...zhThemeConfig
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      title: enTitle,
      description: enDescription,
      themeConfig: {
        ...sharedThemeConfig,
        ...enThemeConfig
      }
    }
  }
})