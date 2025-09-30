// docs/.vitepress/configs/sidebar/en.mts
import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Sidebar = {
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
  '/en/videos/': [
    {
      text: 'Videos',
      items: [
        { text: 'Video List', link: '/en/videos/' }
      ]
    }
  ],
  '/en/notices/': [
    {
      text: 'Notices',
      items: [
        { text: 'Notice List', link: '/en/notices/' }
      ]
    }
  ],
  '/en/about/': [
    {
      text: 'About',
      items: [
        { text: 'Company Profile', link: '/en/about/' }
      ]
    }
  ],
  '/en/contact/': [
    {
      text: 'Contact',
      items: [
        { text: 'Contact Information', link: '/en/contact/' }
      ]
    }
  ]
}