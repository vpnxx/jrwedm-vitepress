<script setup>
// 1. 移除 ref
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

// 2. 定义 props 来接收 products 数据
defineProps({
  products: Array
})

// 3. 移除写死的 products 数据 const products = ref([...])

const swiperModules = [Autoplay];
</script>

<template>
  <div class="product-carousel-wrapper">
    <div class="product-carousel-container">
      <swiper
        :modules="swiperModules"
        :slides-per-view="5"
        :space-between="20"
        :loop="true"
        :speed="5000"
        :autoplay="{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }"
        :breakpoints="{
          1200: { slidesPerView: 5 },
          992: { slidesPerView: 4 },
          768: { slidesPerView: 3 },
          0: { slidesPerView: 2 }
        }"
      >
        <swiper-slide v-for="(product, index) in products" :key="index">
          <a :href="product.link" class="product-card-link">
            <div class="product-card">
              <div class="image-container">
                <img :src="product.src" :alt="product.name" class="product-img">
                <img v-if="product.isNew" src="/svg/new-badge.svg" class="new-badge-img">
              </div>
              <div class="product-info">
                <p class="product-name">{{ product.name }}</p>
              </div>
            </div>
          </a>
        </swiper-slide>
      </swiper>

      <div class="swiper-button-prev-custom"></div>
      <div class="swiper-button-next-custom"></div>
    </div>
  </div>
</template>

<style scoped>
:deep(.swiper-wrapper) {
  transition-timing-function: linear !important;
}

.product-carousel-wrapper {
  padding: 4rem 0;
}
.product-carousel-container {
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  position: relative;
  background-color: transparent;
  border-radius: 0;
  box-shadow: none;
  padding: 0;
}

/* --- 默认 (浅色) 主题样式 --- */
.section-title {
  text-align: center;
  font-size: 2rem;
  color: #111827;
  margin-bottom: 2.5rem;
  margin-top: 0;
  font-weight: 600;
}

.product-card-link:hover .product-card {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.product-card {
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: none;
  transition: all 0.3s ease;
}

.product-info {
  padding: 12px;
  background-color: #f9fafb;
  text-align: center;
  flex-grow: 1;
}

.product-name {
  margin: 0;
  font-size: 12px;
  color: #374151;
  font-weight: 500;
  line-height: 1.4;
}

/* --- 深色主题下的专属样式 --- */
/* 当 <html> 标签有 .dark 类时，以下样式才会生效 */
.dark .section-title {
  color: var(--vp-c-text-1);
}
.dark .product-card-link:hover .product-card {
  box-shadow: var(--vp-shadow-3);
}
.dark .product-card {
  background-color: var(--vp-c-bg-soft);
  box-shadow: var(--vp-shadow-2);
}
.dark .product-info {
  background-color: var(--vp-c-bg-mute);
}
.dark .product-name {
  color: var(--vp-c-text-2);
}


/* --- 通用样式 (不受主题影响) --- */
.product-card-link {
  display: block;
  text-decoration: none;
  color: inherit;
}
.image-container {
  position: relative;
  width: 100%;
}
.product-img {
  width: 100%;
  height: auto;
  aspect-ratio: 1 / 1;
  object-fit: contain;
  box-sizing: border-box;
  padding: 10px;
}
.new-badge-img {
  position: absolute;
  top: 0px;
  right: 0px;
  width: 50px;
  height: 50px;
  z-index: 10;
}
.swiper-button-prev-custom,
.swiper-button-next-custom {
  display: none !important;
}
</style>