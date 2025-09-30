// docs/.vitepress/configs/zh.mts

import type { DefaultTheme } from 'vitepress'
import { nav } from './nav/zh.mts'
import { sidebar } from './sidebar/zh.mts'

// 导出语言特定的标题
export const title: string = '佳润电火花线切割液'
// 导出语言特定的描述
export const description: string = '佳润官方网站'

// 只导出语言特定的 themeConfig 部分
export const themeConfig: DefaultTheme.Config = {
  nav: nav,
  sidebar: sidebar,
  
  // --- 语言特定的标签文字 ---
  docFooter: { 
    prev: '上一页', 
    next: '下一页' 
  },
  outline: { 
    label: '页面导航', 
    level: [2, 3] 
  },
  lastUpdated: { 
    text: '最后更新于', 
    formatOptions: { 
      dateStyle: 'short', 
      timeStyle: 'medium' 
    }
  },
  returnToTopLabel: '回到顶部',
  sidebarMenuLabel: '菜单',
  darkModeSwitchLabel: '主题',
  lightModeSwitchTitle: '切换到浅色模式',
  darkModeSwitchTitle: '切换到深色模式'
}