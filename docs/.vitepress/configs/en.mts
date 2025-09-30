// docs/.vitepress/configs/en.mts

import type { DefaultTheme } from 'vitepress'
import { nav } from './nav/en.mts'
import { sidebar } from './sidebar/en.mts'

// 导出语言特定的标题
export const title: string = 'Jiarun'
// 导出语言特定的描述
export const description: string = 'Jiarun Official Website'

// 只导出语言特定的 themeConfig 部分
export const themeConfig: DefaultTheme.Config = {
  nav: nav,
  sidebar: sidebar,

  // --- 语言特定的标签文字 ---
  docFooter: { 
    prev: 'Previous', 
    next: 'Next' 
  },
  outline: { 
    label: 'On this page', 
    level: [2, 3] 
  },
  lastUpdated: { 
    text: 'Last updated',
    formatOptions: {
      dateStyle: 'short',
      timeStyle: 'medium'
    }
  },
  returnToTopLabel: 'Return to top',
  sidebarMenuLabel: 'Menu',
  darkModeSwitchLabel: 'Theme',
  lightModeSwitchTitle: 'Switch to light mode',
  darkModeSwitchTitle: 'Switch to dark mode'
}