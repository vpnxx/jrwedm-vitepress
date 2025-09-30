import type { DefaultTheme } from 'vitepress'
import { nav } from './nav/zh.mts'
import { sidebar } from './sidebar/zh.mts'

// 直接导出纯粹的配置对象，不要使用 defineConfig
export const zhConfig = {
  title: '佳润电火花线切割液',
  description: '佳润官方网站',
  
  themeConfig: {
    nav: nav,
    sidebar: sidebar,
    docFooter: { prev: '上一页', next: '下一页' },
    outline: { label: '页面导航', level: [2, 3] },
    lastUpdated: { text: '最后更新于', formatOptions: { dateStyle: 'short', timeStyle: 'medium' }},
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  }
}