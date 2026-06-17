<script setup>
import { ref } from 'vue'
import { RouterLink, useRouter, useRoute } from 'vue-router'

const isMenuOpen = ref(false)
const router = useRouter()
const route = useRoute()

function scrollTo(id) {
  isMenuOpen.value = false
  if (route.path !== '/') {
    router.push('/').then(() => {
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    })
  } else {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-purple-100 shadow-sm">
    <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <RouterLink to="/" class="flex items-center gap-3 group">
        <img src="/src/assets/img/pp1.jpg" alt="Pure Purple" class="w-10 h-10 rounded-lg shadow-md group-hover:shadow-purple-300 transition-shadow duration-300">
        <span class="text-xl font-bold bg-gradient-to-r from-purple-700 to-violet-500 bg-clip-text text-transparent">
          PurePurple
        </span>
      </RouterLink>

      <div class="hidden md:flex items-center gap-8">
        <button @click="scrollTo('about')" class="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors duration-200">About</button>
        <button @click="scrollTo('courses')" class="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors duration-200">Courses</button>
        <button @click="scrollTo('services')" class="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors duration-200">Services</button>
        <button @click="scrollTo('calendar')" class="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors duration-200">Calendar</button>
        <button @click="scrollTo('contact')" class="px-5 py-2 bg-gradient-to-r from-purple-600 to-violet-500 text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-purple-300 transition-all duration-300 hover:-translate-y-0.5">Contact Us</button>
      </div>

      <button @click="isMenuOpen = !isMenuOpen" class="md:hidden p-2 text-gray-600 hover:text-purple-600 transition-colors">
        <i :class="isMenuOpen ? 'pi pi-times' : 'pi pi-bars'" style="font-size: 1.25rem"></i>
      </button>
    </div>

    <div v-if="isMenuOpen" class="md:hidden bg-white/95 backdrop-blur-lg border-t border-purple-100 px-6 py-4 space-y-3 animate-fade-in">
      <button @click="scrollTo('about')" class="block w-full text-left text-sm font-medium text-gray-600 hover:text-purple-600 py-2">About</button>
      <button @click="scrollTo('courses')" class="block w-full text-left text-sm font-medium text-gray-600 hover:text-purple-600 py-2">Courses</button>
      <button @click="scrollTo('services')" class="block w-full text-left text-sm font-medium text-gray-600 hover:text-purple-600 py-2">Services</button>
      <button @click="scrollTo('calendar')" class="block w-full text-left text-sm font-medium text-gray-600 hover:text-purple-600 py-2">Calendar</button>
      <button @click="scrollTo('contact')" class="block w-full text-center px-5 py-2 bg-gradient-to-r from-purple-600 to-violet-500 text-white text-sm font-semibold rounded-full">Contact Us</button>
    </div>
  </nav>
</template>
