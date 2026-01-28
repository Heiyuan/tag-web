<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeadView from './views/header/HeadView.vue'
</script>

<template>
  <HeadView />
  <main class="main-content">
    <RouterView />
  </main>
</template>

<style scoped>
.main-content {
  margin-top: 60px;
  background-color: #f5f5f5;
}
</style>
