// docs/.vitepress/configs/en.mts
import type { DefaultTheme } from 'vitepress'
import { nav } from './nav/en.mts'
import { sidebar } from './sidebar/en.mts'

// 导出语言特定的标题和描述
export const title = 'Jiarun'
export const description = 'Jiarun Official Website'

// 只导出语言特定的 themeConfig 部分
export const themeConfig = {
  nav: nav,
  sidebar: sidebar,
  docFooter: { prev: 'Previous', next: 'Next' },
  outline: { label: 'On this page', level: [2, 3] },
  lastUpdated: { text: 'Last updated', formatOptions: { dateStyle: 'short', timeStyle: 'medium' }},
  returnToTopLabel: 'Return to top',
  sidebarMenuLabel: 'Menu',
  darkModeSwitchLabel: 'Theme',
  lightModeSwitchTitle: 'Switch to light mode',
  darkModeSwitchTitle: 'Switch to dark mode'
}

<footer class="custom-footer">
  <div class="footer-container">
    <p>© Jiarun Wire Cutting Fluid Factory</p>
    <p>Zhe ICP Bei 17032288</p>
    <a
      target="_blank"
      href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33068102000388"
    >
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHCSURBVHgBrZRLaxNRFIb/e/NmJEJSbUq2UBOsWCkKrYjgorj1B3gQFdFIQXDbqIiL4so/wF/gRhcJ3UXBFrZRFEqlgqRJo8lkMmnGR8M0o5kIfeEZd9+P85xz7j0X+M/hpqM0P8dDo8A+qM3R0VuwN/ACDAIe93cDBcAL4BswAyrgCjBSK2Y2E/aAPeBGK8YGRg2gHtgI/K9dG3gGfAP2gB/gS634MZuOAbvA+U5eNMD/AOwBO8Fcq/EcY0YxO8B6oCW5B7gBPAJ2gYlK/GWMvWA3oAG4CvxnKx7gKbABfEYpfsyM9wAXgSXAGHCzUnwY4z/gBfAEuA9crRS/xgx8AZ4DNwGflOI/YgY/AF/BReBapfjNxsy5jYlLuflb4CRQkPz2QgmuAx8DXyqFvyDntmJ+AV4FLlcKv0FO7cXYB1wFDlQKr0FOrcX4AewCVyqFXyCnNmP8BqwDFyqF3yGn9mG8BTgDPlQKv0NO/sL4FngOnKhUTgG39pD/APwA7lQKh8Hb9rC2gQeAW5XC7xBjW2EfsAOcqxT/gJ7ahl2A3oCW5B5Qk/wA3gNvlOK/gI3a7A7YAjwEblSKH8E2a/k3gC+A3s4X8AlwYxMAAAAASUVORK5CYII=" alt="Zhe Public Network Security">
      <span>Zhe Gong Wang An Bei 33068102000388</span>
    </a>
  </div>
</footer>

<style scoped>
.custom-footer {
  border-top: 1px solid var(--vp-c-divider);
  padding: 32px 24px;
  background-color: var(--vp-c-bg-soft);
  margin-top: 4rem; /* Spacing from the content above */
}

.footer-container {
  margin: 0 auto;
  max-width: var(--vp-layout-max-width);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem 2rem; /* vertical gap 1rem, horizontal gap 2rem */
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