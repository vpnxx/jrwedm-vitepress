---
homepage: true
layout: page
---

<script setup>
import { slides, products } from './.vitepress/data/zh.ts'
</script>

<MainCarousel :slides="slides" />

<ProductCarousel :products="products" />