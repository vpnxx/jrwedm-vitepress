<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData, inBrowser } from 'vitepress' 
import { watchEffect } from 'vue'

const { Layout } = DefaultTheme
const { isDark } = useData()

// 您的这段逻辑是完全正确的，无需改动
watchEffect(() => {
  if (inBrowser) {
    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) {
      meta.setAttribute('content', isDark.value ? '#1b1b1f' : '#ffffff')
    }
  }
})
</script>

<template>
  <Layout>
    </Layout>
</template>