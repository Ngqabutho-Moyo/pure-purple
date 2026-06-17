<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <section class="relative bg-gradient-to-br from-purple-950 via-purple-800 to-violet-700 text-white overflow-hidden">
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-10 right-20 w-64 h-64 bg-purple-400 rounded-full blur-3xl"></div>
      <div class="absolute bottom-10 left-20 w-48 h-48 bg-violet-400 rounded-full blur-3xl"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-6 py-20 md:py-28">
      <RouterLink to="/" class="inline-flex items-center gap-2 text-purple-300 hover:text-white text-sm font-medium mb-6 transition-colors group">
        <i class="pi pi-arrow-left text-xs transition-transform group-hover:-translate-x-1"></i>
        Back to Home
      </RouterLink>
      <h1 class="text-4xl md:text-5xl font-extrabold">{{ title }}</h1>
      <p v-if="subtitle" class="mt-4 text-lg text-purple-200 max-w-2xl">{{ subtitle }}</p>
    </div>

    <div class="absolute bottom-0 left-0 right-0">
      <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full">
        <path d="M0 60L1440 60L1440 20C1200 50 960 0 720 20C480 50 240 0 0 20L0 60Z" fill="#f5f3ff"/>
      </svg>
    </div>
  </section>
</template>
