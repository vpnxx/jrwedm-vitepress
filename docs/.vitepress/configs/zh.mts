// docs/.vitepress/configs/zh.mts
import type { DefaultTheme } from 'vitepress'
import { nav } from './nav/zh.mts'
import { sidebar } from './sidebar/zh.mts'

// 导出语言特定的标题和描述
export const title = '佳润电火花线切割液'
export const description = '佳润官方网站'

// 只导出语言特定的 themeConfig 部分
export const themeConfig = {
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

<footer class="custom-footer">
  <div class="footer-container">
    <p>© 佳润线切割液生产厂</p>
    <p>浙ICP备17032288号</p>
    <a
      target="_blank"
      href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33068102000388"
    >
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHCSURBVHgBrZRLaxNRFIb/e/NmJEJSbUq2UBOsWCkKrYjgorj1B3gQFdFIQXDbqIiL4so/wF/gRhcJ3UXBFrZRFEqlgqRJo8lkMmnGR8M0o5kIfeEZd9+P85xz7j0X+M/hpqM0P8dDo8A+qM3R0VuwN/ACDAIe93cDBcAL4BswAyrgCjBSK2Y2E/aAPeBGK8YGRg2gHtgI/K9dG3gGfAP2gB/gS634MZuOAbvA+U5eNMD/AOwBO8Fcq/EcY0YxO8B6oCW5B7gBPAJ2gYlK/GWMvWA3oAG4CvxnKx7gKbABfEYpfsyM9wAXgSXAGHCzUnwY4z/gBfAEuA9crRS/xgx8AZ4DNwGflOI/YgY/AF/BReBapfjNxsy5jYlLuflb4CRQkPz2QgmuAx8DXyqFvyDntmJ+AV4FLlcKv0FO7cXYB1wFDlQKr0FOrcX4AewCVyqFXyCnNmP8BqwDFyqF3yGn9mG8BTgDPlQKv0NO/sL4FngOnKhUTgG39pD/APwA7lQKh8Hb9rC2gQeAW5XC7xBjW2EfsAOcqxT/gJ7ahl2A3oCW5B5Qk/wA3gNvlOK/gI3a7A7YAjwEblSKH8E2a/k3gC+A3s4X8AlwYxMAAAAASUVORK5CYII=" alt="浙公网安备">
      <span>浙公网安备 33068102000388号</span>
    </a>
  </div>
</footer>

<style scoped>
.custom-footer {
  border-top: 1px solid var(--vp-c-divider);
  padding: 32px 24px;
  background-color: var(--vp-c-bg-soft);
  margin-top: 4rem; /* 与上方内容的间距 */
}

.footer-container {
  margin: 0 auto;
  max-width: var(--vp-layout-max-width);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem 2rem; /* 垂直间距1rem，水平间距2rem */
  text-align: center;
  font-size: 14px;
  color: var(--vp-c-text-2);
}

.footer-container p {
  margin: 0;
}

.footer-container a {
  color: var(--vp-c-text-2);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: color 0.25s;
}

.footer-container a:hover {
  color: var(--vp-c-text-1);
}
</style>