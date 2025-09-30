// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import './var.css'
import './sidebarIcon.css';
import './blockquote.css'
import './custom-block.css'
// import './blur.css'
import './link.css'
import './marker.css'
import './code.css'
import './code-group.css'
import './code-title.css'
// import './hidden.css'
import 'vue-amazing-ui/css'
import Layout from './Layout.vue'
import AmazingUI from 'vue-amazing-ui'
import ContactInfo from './components/ContactInfo.vue'

// --- 新增内容开始 ---
// 1. 手动导入您自己的 .vue 组件
import MainCarousel from './components/MainCarousel.vue'
import ProductCarousel from './components/ProductCarousel.vue'
// --- 新增内容结束 ---

export default {
  // 继承默认主题
  extends: DefaultTheme, 
  
  // 注册您的自定义布局
  Layout: Layout,

  // 扩展 enhanceApp 函数
  enhanceApp({ app, router, siteData }) {
    // 注册 vue-amazing-ui 组件库
    app.use(AmazingUI)

    app.component('MainCarousel', MainCarousel)
    app.component('ProductCarousel', ProductCarousel)
    app.component('ContactInfo', ContactInfo)
  }
}