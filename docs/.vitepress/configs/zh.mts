// docs/.vitepress/configs/zh.mts

// 从这里导出的应该是一个纯粹的配置对象
export const zhConfig = {
  title: '佳润电火花线切割液',
  description: '佳润官方网站',
  
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '产品展示', link: '/products/' },
      { text: '影片介绍', link: '/videos/' },
      { text: '🔥 重要通告', link: '/notices/' },
      { text: '关于佳润', link: '/about/' },
      { text: '联系我们', link: '/contact/' }
    ],
    
    sidebar: {
      '/products/': [
        {
          text: '产品展示',
          items: [
            { text: '产品概览', link: '/products/' },
            { text: '产品系列A', link: '/products/product-1' },
            { text: '产品系列B', link: '/products/product-2' }
          ]
        }
      ],
      // ... (您其他的 sidebar 配置)
    },
    
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
      `
    }
  }
}