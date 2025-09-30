---
layout: page
---

<script setup>
// 1. 导入中文数据
import { slides, products } from './.vitepress/data/zh.ts'
</script>

<MainCarousel :slides="slides" />

<ProductCarousel :products="products" />