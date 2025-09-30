<script setup>
import { ref } from 'vue'
// 从模块中移除 Navigation，因为我们将通过配置对象来控制
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';

// Import Swiper's required CSS files
import 'swiper/css';
// import 'swiper/css/navigation'; // 我们不再需要默认的导航样式
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const slides = ref([
  { 
    src: '/banners/banner1.jpg',
    title: '割的快 佳润牌',
    subtitle: '专业品质，值得信赖',
    link: '/products/',
    buttonText: '了解更多'
  },
  { 
    src: '/banners/banner2.jpg',
    title: '复合工作液引领者',
    subtitle: '技术创新 引领未来',
    link: '/about/',
    buttonText: '关于佳润'
  },
  { 
    src: '/banners/banner3.jpg',
    title: '品质保证 服务至上',
    subtitle: '您的满意是我们最大的追求',
    link: '/contact/',
    buttonText: '联系我们'
  }
])

const swiperModules = [Autoplay, Navigation, Pagination, EffectFade];
</script>

<template>
  <div class="main-carousel-wrapper">
    <swiper
      :modules="swiperModules"
      :slides-per-view="1"
      :loop="true"
      effect="fade"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
      }"
      :pagination="{ clickable: true }"
      :navigation="{
        nextEl: '.swiper-button-next-custom',
        prevEl: '.swiper-button-prev-custom',
      }"
    >
      <swiper-slide v-for="slide in slides" :key="slide.src">
        <div 
          class="slide-content" 
          :style="{ backgroundImage: `url(${slide.src})` }">
          <div class="text-overlay">
            <h1 class="slide-title">{{ slide.title }}</h1>
            <p class="slide-subtitle">{{ slide.subtitle }}</p>
            <a v-if="slide.link" :href="slide.link" class="slide-button">{{ slide.buttonText }}</a>
          </div>
        </div>
      </swiper-slide>
    </swiper>
    
    <div class="swiper-button-prev-custom"></div>
    <div class="swiper-button-next-custom"></div>
  </div>
</template>

<style scoped>
.main-carousel-wrapper {
  margin-bottom: 0rem;
  height: 300px;
  position: relative; /* 为箭头定位提供参考 */
}
.slide-content {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.slide-content::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
}
.text-overlay {
  position: relative;
  z-index: 1;
  color: #fff;
  padding: 20px;
}
.slide-title {
  font-size: 3rem;
  font-weight: bold;
  margin: 0 0 1.5rem 0;
  text-shadow: 0 2px 4px rgba(0,0,0,0.5);
}
.slide-subtitle {
  font-size: 1.2rem;
  margin: 0 0 1.5rem 0;
  max-width: 600px;
  opacity: 0.9;
  text-shadow: 0 1px 3px rgba(0,0,0,0.5);
}
.slide-button {
  display: inline-block;
  padding: 12px 30px;
  background-color: var(--vp-c-brand-1);
  color: #fff;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s ease;
}
.slide-button:hover {
  background-color: var(--vp-c-brand-2);
  transform: scale(1.05);
}

:deep(.swiper) {
  height: 100%;
}

/* 这部分样式现在可以正确地作用于我们自定义的按钮上 */
.swiper-button-prev-custom,
.swiper-button-next-custom {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  cursor: pointer;
  z-index: 10;
  background-size: 24px 24px;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.swiper-button-prev-custom {
  left: 20px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='15 18 9 12 15 6'%3E%3C/polyline%3E%3C/svg%3E");
}
.swiper-button-next-custom {
  right: 20px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E");
}
.main-carousel-wrapper:hover .swiper-button-prev-custom,
.main-carousel-wrapper:hover .swiper-button-next-custom {
  opacity: 0.7;
}
.swiper-button-prev-custom:hover,
.swiper-button-next-custom:hover {
  opacity: 1;
}

:deep(.swiper-pagination-bullet) {
  background: rgba(255, 255, 255, 0.5);
  width: 10px;
  height: 10px;
  opacity: 1;
}
:deep(.swiper-pagination-bullet-active) {
  background: #ffffff;
}

@media (max-width: 768px) {
  .slide-title {
    font-size: 2rem;
  }
  .slide-subtitle {
    font-size: 1rem;
  }
}
</style>