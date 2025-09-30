<template>
  <div class="contact-wrapper">
    <div class="contact-container">
      <h2 class="section-title">联系方式</h2>
      <div class="contact-grid">
        <div class="contact-item">
          <span class="label">手机 (浙江)</span>
          <span class="value">13600639785</span>
        </div>
        <div class="contact-item">
          <span class="label">手机 (广东)</span>
          <span class="value">18857581322</span>
        </div>
        <div class="contact-item">
          <span class="label">电话 / 传真</span>
          <span class="value">0575-87300281</span>
        </div>
        <div class="contact-item">
          <span class="label">公司邮箱</span>
          <span class="value">jrwedm@163.com</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-wrapper {
  padding: 4rem 0;
  background-color: rgba(255, 255, 255, 0.5); /* 半透明白色背景，能透出渐变 */
  border-top: 1px solid #e5e7eb;
}
.contact-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 24px;
  text-align: center;
}
.section-title {
  font-size: 2rem;
  color: #111827;
  margin-bottom: 2.5rem;
  font-weight: 600;
}
.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}
.contact-item {
  padding: 1.5rem;
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.label {
  font-size: 0.9rem;
  color: #6b7280;
}
.value {
  font-size: 1.2rem;
  font-weight: 500;
  color: #1f2937;
  word-break: break-all;
}
</style>