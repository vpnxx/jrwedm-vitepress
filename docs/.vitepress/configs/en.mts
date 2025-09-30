// docs/.vitepress/configs/en.mts
import type { DefaultTheme } from 'vitepress'
import { nav } from './nav/en.mts'
import { sidebar } from './sidebar/en.mts'

// 直接导出纯粹的配置对象，不要使用 defineConfig
export const enConfig = {
  title: 'Jiarun',
  description: 'Jiarun Official Website',
  
  themeConfig: {
    nav: nav,
    sidebar: sidebar,
    docFooter: { prev: 'Previous', next: 'Next' },
    outline: { label: 'On this page', level: [2, 3] },
    lastUpdated: { text: 'Last updated', formatOptions: { dateStyle: 'short', timeStyle: 'medium' }},
    returnToTopLabel: 'Return to top',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Theme',
    lightModeSwitchTitle: 'Switch to light mode',
    darkModeSwitchTitle: 'Switch to dark mode',
    footer: {
      message: `
        <div style="display: flex; justify-content: center; align-items: center; gap: 20px;">
          <span style="color: #aaa;">© Jiarun Wire-EDM Fluid Production Plant</span>
          <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33068102000388" style="display: inline-flex; align-items: center; gap: 5px; text-decoration: none; color: #aaa;">
            <img src="/images/beian.png" style="float:left;"/>
            <span>浙公网安备 33068102000388号</span>
          </a>
        </div>
      `
    }
  }
}