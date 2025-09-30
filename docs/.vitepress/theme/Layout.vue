<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'

const { Layout } = DefaultTheme
const { theme } = useData()
</script>

<template>
  <Layout>
    <template #layout-bottom>
      <footer class="VPFooter custom-footer">
        <div class="container">
          <div class="message" v-html="theme.footer.message"></div>
        </div>
      </footer>
    </template>
  </Layout>
</template>

<style scoped>
/* 为我们的自定义页脚添加一些样式，确保它看起来和默认页脚一样 */
.custom-footer {
  position: relative;
  z-index: var(--vp-z-index-footer);
  border-top: 1px solid var(--vp-c-divider);
  padding: 32px 24px;
  background-color: var(--vp-c-bg-soft);
}
.container {
  margin: 0 auto;
  max-width: var(--vp-layout-max-width);
  text-align: center;
}
.message {
  line-height: 24px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
}
</style>