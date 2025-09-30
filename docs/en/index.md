---
homepage: true
layout: page
---

<script setup>
// 1. 导入英文数据
import { slides, products } from '../.vitepress/data/en.ts'
</script>

<MainCarousel :slides="slides" />

<ProductCarousel :products="products" />