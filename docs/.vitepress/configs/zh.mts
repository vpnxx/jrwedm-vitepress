import { defineConfig } from 'vitepress'
import { nav } from './nav/zh.mts'
import { sidebar } from './sidebar/zh.mts'

export const zhConfig = defineConfig({
  title: '佳润电火花线切割液',
  description: '佳润官方网站',
  
  themeConfig: {
    nav: nav, // 导入 nav
    sidebar: sidebar, // 导入 sidebar
    // 页面配置
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
    darkModeSwitchTitle: '切换到深色模式',

    footer: {
      message: `
        <div style="display: flex; justify-content: center; align-items: center; gap: 20px;">
          <span style="color: #aaa;">© 佳润线切割液生产厂</span>
          <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33068102000388" style="display: inline-flex; align-items: center; gap: 5px; text-decoration: none; color: #aaa;">
		 			  <img src="images/beian.png" style="float:left;"/>
            <span>浙公网安备 33068102000388号</span>
          </a>
        </div>
      `,
      // copyright: '版权所有 © 佳润线切割液生产厂'
    }
  }
})