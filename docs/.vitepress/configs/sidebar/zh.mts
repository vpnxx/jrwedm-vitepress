// docs/.vitepress/configs/sidebar/zh.mts
import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Sidebar = {
  '/products/': [
    {
      text: '产品展示',
      items: [
        { text: '产品展示', link: '/products/' },
        { text: 'JR1A 复合型', link: '/products/JR1A' },
        { text: 'JR 升级版', link: '/products/JRS' },
        { text: 'JR1AA 高亮中走丝用', link: '/products/JR1AA' },
        { text: 'JR1B 中走丝工作液', link: '/products/JR1B' },
        { text: 'JR2A 大厚度切割', link: '/products/JR2A' },
        { text: 'JR3A 线切割专用', link: '/products/JR3A' },
        { text: 'JR3A 升级版', link: '/products/JR3AS' },
        { text: 'JR3B 光亮型', link: '/products/JR3B' },
        { text: 'JR3C 超浓缩', link: '/products/JR3C' },
        { text: 'JR4A 浓缩皂', link: '/products/JR4A' },
        { text: 'JR1H 低丝耗高效', link: '/products/JR1H' },
        { text: 'JR3H 低丝耗高效', link: '/products/JR3H' },
        { text: 'JR10A 高厚度/超硬金属', link: '/products/JR10A' },
        { text: 'JR20A 超高效切割', link: '/products/JR20A' }
      ]
    }
  ],
  '/videos/': [
    {
      text: '影片介绍',
      items: [
        { text: '视频列表', link: '/videos/' }
      ]
    }
  ],
  '/notices/': [
    {
      text: '重要通告',
      items: [
        { text: '通告列表', link: '/notices/' }
      ]
    }
  ],
  '/about/': [
    {
      text: '关于佳润',
      items: [
        { text: '公司简介', link: '/about/' }
      ]
    }
  ],
  '/contact/': [
    {
      text: '联系我们',
      items: [
        { text: '联系方式', link: '/contact/' }
      ]
    }
  ]
}