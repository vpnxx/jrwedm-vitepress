// docs/.vitepress/configs/en.mts

// 这里也只导出一个纯粹的配置对象
export const enConfig = {
  title: 'Jiarun',
  description: 'Jiarun Official Website',
  
  themeConfig: {
    nav: [
      { text: 'Home', link: '/en/' },
      { text: 'Products', link: '/en/products/' },
      { text: 'Videos', link: '/en/videos/' },
      { text: '🔥 Notices', link: '/en/notices/' },
      { text: 'About', link: '/en/about/' },
      { text: 'Contact', link: '/en/contact/' }
    ],
  
    sidebar: {
      '/en/products/': [
        {
          text: 'Products',
          items: [
            { text: 'Overview', link: '/en/products/' },
            { text: 'Product Series A', link: '/en/products/product-1' },
            { text: 'Product Series B', link: '/en/products/product-2' }
          ]
        }
      ],
      // ... (您其他的英文 sidebar 配置)
    },
    
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
}