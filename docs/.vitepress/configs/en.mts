import { defineConfig } from 'vitepress'
import { nav } from './nav/en.mts'
import { sidebar } from './sidebar/en.mts'

export const enConfig = defineConfig({
  title: 'Jiarun',
  description: 'Jiarun Official Website',
  
  themeConfig: {
    nav: nav, // 导入 nav
    sidebar: sidebar, // 导入 sidebar
    // Page configuration
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
})