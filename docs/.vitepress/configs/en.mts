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
    darkModeSwitchTitle: 'Switch to dark mode'
  }
}