<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'

const { Layout } = DefaultTheme
const { theme } = useData()
</script>

<template>
  <Layout>
    <template #layout-bottom>
      <footer class="custom-footer">
        <div class="container">
          <div class="message" v-html="theme.footer.message"></div>
        </div>
      </footer>
    </template>
  </Layout>
</template>

<style scoped>
.custom-footer {
  position: relative;
  z-index: var(--vp-z-index-footer);
  border-top: none; /* 确保没有任何上边框 */
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