// docs/.vitepress/configs/zh.mts
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
    darkModeSwitchTitle: '切换到深色模式',
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
    }
  }
}